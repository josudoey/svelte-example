// ref https://svelte.dev/docs/kit/load
import type { PageLoad } from './$types';

export const load: PageLoad = ({ data, params }) => {
	return {
		post: {
			title: `Title for ${params.slug} goes here`,
			content: `Content for ${params.slug} goes here`
        },
        serverTime: data.serverTime
	};
};
