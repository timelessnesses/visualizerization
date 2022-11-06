import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		sourcemap: 'inline',
		minify: true,
		cssCodeSplit: true,
		chunkSizeWarningLimit: 200
	}
};

export default config;
