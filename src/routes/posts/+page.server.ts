import type { PostEntityResponseCollection } from '$types/generated/strapi';

export async function load() {
	const res = await fetch('http://localhost:1337/api/posts?populate=*');
	const data = await res.json();
	return data as PostEntityResponseCollection;
}
