import { getOwnData } from '$lib/server/strapi/users.js';
import { error } from '@sveltejs/kit';

export async function GET({ cookies, setHeaders }) {
	const session = cookies.get('session');
	if (!session) {
		error(401, {
			message: 'Unauthorized',
		});
	}

	setHeaders({
		'cache-control': 'max-age=60',
	});

	const data = await getOwnData(session);
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
			'Content-Disposition': 'attachment; filename=stormgate-fi-my-data.json',
		},
		status: 200,
	});
}
