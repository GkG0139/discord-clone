import cors from 'cors';
import express from 'express';

import { authRouter } from './routes/auth-routes';
import { errorHandler } from './middleware/error-handler';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/auth', authRouter);

app.use(errorHandler);

export { app };
