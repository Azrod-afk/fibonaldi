import { gql } from "https://deno.land/x/graphql_tag@0.0.1/mod.ts";

export var Schema = gql`
type User {
    id: ID
    username: String
    password: String
}

type LoginResponse {
    status: Boolean
    message: String
}

type Query {
    users: [User!]
}

type Mutation {
    createUser(username: String, password: String): User
    login(username: String, password: String): LoginResponse
}`;
