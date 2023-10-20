// import * as _ from 'lodash'
import { GraphQLSchema } from 'graphql';

import { RootQueryType } from './root_query_type';
import { mutation } from './mutations';


const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: mutation
});
export { schema }; 
