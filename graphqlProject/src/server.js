import { ApolloServer, gql } from 'apollo-server';
import fetch from 'node-fetch';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_APP = 'secret token';
const SESSION_TIME = 720;

function generateToken(userId) {
  return jwt.sign({
    userid: userId
  }, SECRET_APP, { expiresIn: Math.floor(Date.now() / 1000) + sessionTime });
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_APP);
    return decoded.userid;
  } catch (error) {
    return null;
  }
}

async function request(data) {
    const url = `${process.env.BACK_END_SERVICES}/register`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async function loginService(mail, password) {
    const url = `${process.env.BACK_END_SERVICES}/login`;
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify({ mail, password }),
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

  type userLogged {
    user: User
    token: String
    error: String
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    registerUser(input: UserInput): User
    loginUser(mail: String, password: String): userLogged
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
    },
    loginUser: async (_, { mail, password }) => {
      const result = await loginService(mail, password);
      const data = await result.json();
      if (result.status !== 200) {
        return data;
      } else {
        const token = generateToken(data._id);        
        return { user: data, token };
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
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