export default `
  type Giver {
    id: String!
    name: String!
    exclude: String!
  }
  type Query {
    giver(id: String!): Giver
    givers: [Giver]
  }
  type Mutation {
    addGiver(id: String!, name: String!, exclude: String!): Giver
    editGiver(id: String, name: String, giver: String): Giver
    deleteGiver(id: String, name: String, exclude: String): Giver
  }
`;
