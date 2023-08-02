const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
type Query {
  generateText(prompt: String!): String
}
`;

module.exports = typeDefs;
