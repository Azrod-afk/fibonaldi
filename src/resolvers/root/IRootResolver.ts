import { IMutationResolver, IQueryResolver } from "../../mods.ts";

export default interface IRootResolver
{
    Query: IQueryResolver;
    Mutation: IMutationResolver;
}