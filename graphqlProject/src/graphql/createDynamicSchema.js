import { gql } from 'apollo-server';
import * as User from './user';
import * as Category from './category';

const features = [
  User,
  Category,
];
const stringDoers = field => features.reduce((acc, curr) => acc.concat(curr[field] || ''), '');

const resolversDoers = field => features.reduce((acc, curr) => Object.assign({}, acc, curr.Resolvers[field]), {});

const typeDefs = gql`
${stringDoers('type')}
${stringDoers('inputType')}

type Query {
  ${stringDoers('Query')}
}

type Mutation {
  ${stringDoers('Mutation')}
}
`;
const Query = resolversDoers('Query');
const Mutation = resolversDoers('Mutation');
const TypeResolvers = resolversDoers('TypeResolvers');
const resolvers = Object.assign({}, { Query, Mutation }, TypeResolvers);

export {
  typeDefs,
  resolvers,
};
