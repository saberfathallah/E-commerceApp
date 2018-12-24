import { ApolloServer, gql } from 'apollo-server';
import schema from './graphql/schema';
import dotenv from 'dotenv';
import { verifyToken } from './utils/authorization';

dotenv.config();

const server = new ApolloServer({
  schema,
  context:({ req }) => {
    const userid = verifyToken(req.headers.authorization);
    return {
      userid
    }
  }
 });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});