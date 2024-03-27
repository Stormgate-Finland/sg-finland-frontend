/*
 Code based on
 https://github.com/LeeviHalme/node-steam-openid
*/

import openid from 'openid';

const OPENID_CHECK = {
	ns: 'http://specs.openid.net/auth/2.0',
	op_endpoint: 'https://steamcommunity.com/openid/login',
	claimed_id: 'https://steamcommunity.com/openid/id/',
	identity: 'https://steamcommunity.com/openid/id/',
};

class SteamAuth {
	realm: string;
	returnUrl: string;
	relyingParty: openid.RelyingParty;

	constructor({ realm, returnUrl }: { realm: string; returnUrl: string }) {
		if (!realm || !returnUrl)
			throw new Error('Missing realm or returnURL parameter(s). These are required.');

		this.realm = realm;
		this.returnUrl = returnUrl;
		this.relyingParty = new openid.RelyingParty(returnUrl, realm, true, true, []);
	}

	// Get redirect url for Steam
	async getRedirectUrl(): Promise<string> {
		return new Promise((resolve, reject) => {
			this.relyingParty.authenticate(
				'https://steamcommunity.com/openid',
				false,
				(error, authUrl) => {
					if (error) return reject('Authentication failed: ' + JSON.stringify(error));
					if (!authUrl) return reject('Authentication failed.');

					resolve(authUrl);
				},
			);
		});
	}

	// Authenticate user, return steamID64
	async authenticate(url: string): Promise<string> {
		return new Promise((resolve, reject) => {
			const urlObj = new URL(url);
			const searchParams = new URLSearchParams(urlObj.search);
			const params: { [key: string]: string } = {};
			for (const [key, value] of searchParams.entries()) {
				params[key] = value;
			}

			if (params['openid.ns'] !== OPENID_CHECK.ns) {
				return reject('Claimed ns is not valid.');
			}
			if (params['openid.op_endpoint'] !== OPENID_CHECK.op_endpoint) {
				return reject('Claimed op_endpoint is not valid.');
			}
			if (!params['openid.claimed_id']?.startsWith(OPENID_CHECK.claimed_id)) {
				return reject('Claimed claimed_id is not valid.');
			}
			if (!params['openid.identity']?.startsWith(OPENID_CHECK.identity)) {
				return reject('Claimed identity is not valid.');
			}

			// Verify assertion
			this.relyingParty.verifyAssertion(url, async (error, result) => {
				if (error) {
					return reject('Steam error in verifyAssertion: ' + JSON.stringify(error));
				}
				if (!result || !result?.authenticated) {
					return reject('Failed to authenticate user.');
				}
				if (
					!/^https?:\/\/steamcommunity\.com\/openid\/id\/\d+$/.test(result?.claimedIdentifier ?? '')
				) {
					return reject('Claimed identity is not valid.');
				}

				const steamId =
					result?.claimedIdentifier?.replace('https://steamcommunity.com/openid/id/', '') ?? '';
				resolve(steamId);
			});
		});
	}
}

export default SteamAuth;
