import express from 'express';
import expressPlayground from 'graphql-playground-middleware-express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema/schema.js';

const app = express();
const graphQLPlayground = expressPlayground.default

app.all('/graphql', createHandler({ schema }));
app.get('/playground', graphQLPlayground({ endpoint: '/graphql' }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');