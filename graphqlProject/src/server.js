import { ApolloServer, gql } from 'apollo-server';
import schema from './graphql/schema';
import dotenv from 'dotenv';
import { verifyToken } from './utils/authorization';
import getUserById from '../src/graphql/user/services/getUserById';

dotenv.config();

const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    const userid = verifyToken(req.headers.authorization);
      const data = await getUserById(userid);
    
    return {
      user: data.user ? data.user : null,
    }
  }
 });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});