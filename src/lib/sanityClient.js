import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'b8i6brxt',
	dataset: 'production',
	apiVersion: '2021-08-31',
	useCdn: true
});

export { client };
