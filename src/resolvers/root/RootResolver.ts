import { IMutationResolver, IQueryResolver } from "../../mods.ts";
import IRootResolver from "./IRootResolver.ts";

export class RootResolver implements IRootResolver {
  constructor(query: IQueryResolver, mutation: IMutationResolver) {
    this.Query = query;
    this.Mutation = mutation;
  }

   Query: IQueryResolver;
   Mutation: IMutationResolver;
}
