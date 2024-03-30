import { generate } from 'openapi-typescript-codegen';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
	dotenv.config();

	if (!process.env.SGF_API_URL) {
		// eslint-disable-next-line no-console
		console.error('SGF_API_URL is not defined');
		process.exit(1);
	}

	const output = path.join(__dirname, '../src/lib/server/sg-finland-api/generated');
	const input = `${process.env.SGF_API_URL}/openapi.json`;

	await generate({
		input,
		output,
		clientName: 'SGFApi',
		useOptions: true,
	});
}

main();
