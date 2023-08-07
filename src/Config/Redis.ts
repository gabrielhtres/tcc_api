import { createClient } from 'redis';

const redisClient = createClient({
    url: process.env.REDIS_URL,
});

redisClient.connect();

redisClient.on('error', (err) => {
    console.error('Erro no Redis:', err);
});

export default redisClient;
