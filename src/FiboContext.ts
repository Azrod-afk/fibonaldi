import { DocumentNode } from "https://deno.land/x/graphql_deno@v15.0.0/mod.ts";
import { MutationResolver, QueryResolver, RootResolver, UsersService } from "./mods.ts"
import { Schema } from "./schema/Schema.ts"

class FiboContext
{
    constructor()
    {
        const usersService = new UsersService();
        
        const queryResolver = new QueryResolver();
        const mutationResolver = new MutationResolver();
        this.rootResolver = new RootResolver(queryResolver, mutationResolver);
    }

    private rootResolver : RootResolver;

    Resolvers() : RootResolver {
        return this.rootResolver;
    }

    Schema() : DocumentNode {
        return Schema;
    }
}

export var Context = new FiboContext();