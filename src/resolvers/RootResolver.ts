import { MutationResolver, QueryResolver } from "../mods.ts";

export class RootResolver {
  constructor(query: QueryResolver, mutation: MutationResolver) {
    this.Query = query;
    this.Mutation = mutation;
  }

  Query: QueryResolver;
  Mutation: MutationResolver;
}
