import * as _ from 'lodash'
import { GraphQLSchema } from 'graphql';

import { RootQueryType } from './root_query_type.js';
import { mutations } from './mutations.js';

const rootSchema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutations
});

export { rootSchema }; 