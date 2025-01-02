// ref https://svelte.dev/tutorial/kit/get-handlers

import { json } from '@sveltejs/kit';

export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;

	return json(number);
}