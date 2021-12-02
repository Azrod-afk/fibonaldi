import { Server } from "https://deno.land/std@0.107.0/http/server.ts";
import { GraphQLHTTP } from "https://deno.land/x/gql@1.1.0/mod.ts";
import { makeExecutableSchema } from "https://deno.land/x/graphql_tools@0.0.2/mod.ts";
import { IUsersService, UsersService, RootResolver, QueryResolver, MutationResolver, IFiboContext, FiboContext } from "./mods.ts";
import Schema from "./schema/Schema.ts";

export class App 
{
    constructor()
    {
        this._usersService = new UsersService();

        this._rootResolver = new RootResolver(
            new QueryResolver(),
            new MutationResolver(),
        );
    }

    private _usersService : IUsersService;
    private _rootResolver : RootResolver;

    Run()
    {
        const s = new Server({
            handler: async (req) => {
              const { pathname } = new URL(req.url);
          
              return pathname === "/graphql"
                ? await GraphQLHTTP<Request, IFiboContext>({
                  schema: makeExecutableSchema({
                    resolvers: this._rootResolver,
                    typeDefs: Schema,
                  }),
                  context: (request) => (new FiboContext(request, this._usersService)),
                  graphiql: true,
                })(req)
                : new Response("Not Found", { status: 404 });
            },
            addr: ":3000",
          });
          
          s.listenAndServe();
    }
}