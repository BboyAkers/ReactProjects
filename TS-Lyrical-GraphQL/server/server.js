import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import expressPlayground from 'graphql-playground-middleware-express';
import { createHandler } from 'graphql-http/lib/use/express';
import { rootSchema } from './schemas/schema.js';

const app = express();
const graphQLPlayground = expressPlayground.default;

dotenv.config();

// Replace with your Mongo Atlas URI
const MONGO_URI = process.env.MONGO_CONNECTION_URI;
if (!MONGO_URI) {
  throw new Error('You must provide a Mongo Atlas URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to Mongo Atlas instance.'))
  .on('error', (error) =>
    console.log('Error connecting to Mongo Atlas:', error)
  );

app.use(cors());

app.all('/graphql', createHandler({ schema: rootSchema }));
app.get('/playground', graphQLPlayground({ endpoint: '/graphql' }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');