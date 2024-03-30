import { SGF_API_KEY, SGF_API_URL } from '$env/static/private';
import { type OpenAPIConfig, SGFApi } from './generated';

const sgfApiConfig: OpenAPIConfig = {
	BASE: SGF_API_URL,
	VERSION: '1.0.0',
	WITH_CREDENTIALS: false,
	CREDENTIALS: 'include',
	HEADERS: {
		api_key: SGF_API_KEY,
	},
};

export const sgfApi = new SGFApi(sgfApiConfig);
