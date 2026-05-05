import { createClient } from 'redis';

let client;

export async function getRedisClient() {
    if (!client) {
        client = createClient({ url: process.env.REDIS_URL || 'redis://10.98.71.186:6379' });
        client.on('error', (error) => {
            console.error('[order-pu] Redis error', error);
        });
        await client.connect();
    }

    return client;
}