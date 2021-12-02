import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export default gql`
type User {
    id: ID!
    username: String!
    password: String!
}

type UserResponse {
    status: Boolean!
    message: String
    user: User
}

type Query {
    users: [User!]!
}

type Mutation {
    createUser(username: String!, password: String!): UserResponse
    login(username: String!, password: String!): UserResponse
}`;
