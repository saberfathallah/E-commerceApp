import { skip, combineResolvers } from 'graphql-resolvers';
import jwt from 'jsonwebtoken';

const SECRET_APP = 'secret token';
const SESSION_TIME = 720;

export const isAuthenticated = (_, $, { user }) => (user ? skip : { error: 'error authentification' });

export const isAdmin = combineResolvers(
  isAuthenticated,
  (_, $, { user: { type } }) => (type === 'superAdmin'
    ? skip
    :{ error: 'Not authorized as superAdmin.' }),
);

export function generateToken(userId) {
  return jwt.sign({
    userid: userId
  }, SECRET_APP, { expiresIn: Math.floor(Date.now() / 1000) + SESSION_TIME });
}

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, SECRET_APP);
    return decoded.userid;
  } catch (error) {
    return null;
  }
}