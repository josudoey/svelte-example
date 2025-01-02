import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const serverTime = Date.now()
	return {
		serverTime 
	};
};