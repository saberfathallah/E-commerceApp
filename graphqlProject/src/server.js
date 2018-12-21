import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

function request(data) {
    const url = `${process.env.BACK_END_SERVICES}/register`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`

  type User {
    firstName: String
    lastName: String
    age: Int
    type: String
    adress: String
    mail: String
    password: String
  }

  input UserInput {
    firstName: String
    lastName: String
    age: Int
    type: String
    adress: String
    mail: String
    password: String
  }

#   input loginInput {
#     mail: String
#     password: String
#   }

#   input userLogged {
#     user: User
#     token: String
#     error: String
#   }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    registerUser(input: UserInput): User
    # loginUser(input: loginInput): userLogged
}
`;

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    registerUser: async (_, { input }) => {
      const result = await request(input);
      const data = await result.json();
      return data;
    } 
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});