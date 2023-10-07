const IS_PROD_ENV = process.env.NODE_ENV === 'production';
const API_PORT = process.env.API_PORT ?? 8080;
const MONGO_URI = process.env.MONGO_URI ?? 'default-mongo-uri';

const JWT_SECRET = process.env.JWT_SECRET ?? '';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '90d';

export {IS_PROD_ENV, MONGO_URI, API_PORT, JWT_SECRET, JWT_EXPIRES_IN};
