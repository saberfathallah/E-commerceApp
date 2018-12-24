import { makeExecutableSchema } from 'graphql-tools';
import { typeDefs, resolvers } from './createDynamicSchema';


const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
export default schema;