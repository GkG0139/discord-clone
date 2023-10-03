import 'dotenv/config';
import 'express-async-errors';

import mongoose from 'mongoose';

import { app } from './app';
import { API_PORT, MONGO_URI } from './utils/env';

async function init(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI ?? '');
    console.log('Successfully connected to MongoDB.');
  } catch (err) {
    console.error(err);
  }

  app.listen(API_PORT, () => {
    console.log('Server listening on Port', API_PORT);
  });
}

void init();
