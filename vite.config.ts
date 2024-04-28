import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default ({ mode }: { mode: string }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		plugins: [
			sveltekit(),
			svg({
				includePaths: ['./src/lib/icons/', './src/assets/icons/'],
				svgoOptions: {
					multipass: true,
					plugins: [
						{
							name: 'preset-default',
							// by default svgo removes the viewBox which prevents svg icons from scaling
							// not a good idea! https://github.com/svg/svgo/pull/1461
							params: { overrides: { removeViewBox: false } },
						},
					],
				},
			}),
		],
		test: {
			include: ['src/**/*.{test,spec}.{js,ts}'],
		},
		server: {
			proxy: {
				'/uploads': {
					target: `${process.env.CMS_URL}`,
				},
			},
		},
	});
};
