import { Router } from 'itty-router';

const router = Router();

router.all('*', () => new Response('404, not found!', { status: 404 }));

addEventListener('fetch', (event: FetchEvent) => {
	event.respondWith(router.handle(event.request, event));
});
