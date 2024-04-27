// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: UsersPermissionsMe;
		}
		interface PageData {
			siteSettings: SiteSettings;
			discordServer?: DiscordServer;
			i18n: { locale: string; route: string };
			translations: Translations.SerializedTranslations;
		}
		interface Platform {
			env: {
				// YOUR_KV_NAMESPACE: KVNamespace;
				// YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;
			};
			context: {
				waitUntil(promise: Promise<unknown>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
