import cookieSession from 'cookie-session';
import cors from 'cors';
import express from 'express';

import { errorHandler } from './middleware/error-handler';
import { authRouter } from './routes/auth-routes';
import { IS_PROD_ENV } from './utils/env';

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cookieSession({
    signed: false,
    secure: IS_PROD_ENV,
  })
);

app.use('/api/auth', authRouter);

app.use(errorHandler);

export { app };
