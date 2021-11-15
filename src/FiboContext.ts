import { DocumentNode } from "https://deno.land/x/graphql_deno@v15.0.0/mod.ts";
import {
  MutationResolver,
  QueryResolver,
  RootResolver,
  UsersService,
} from "./mods.ts";
import { Schema } from "./schema/Schema.ts";

class FiboContext {
  constructor() {
    const usersService = new UsersService();

    this.rootResolver = new RootResolver(
      new QueryResolver(),
      new MutationResolver(),
    );
  }

  private rootResolver: RootResolver;

  Resolvers(): RootResolver {
    return this.rootResolver;
  }

  Schema(): DocumentNode {
    return Schema;
  }
}

export const Context: FiboContext = new FiboContext();
