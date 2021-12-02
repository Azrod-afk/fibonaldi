import { IFiboContext, IQueryResolver, User } from "../../mods.ts";

export class QueryResolver implements IQueryResolver {
  users(
    _parent: any,
    _args: any,
    { usersService }: IFiboContext,
    _info: any,
  ): User[] {
    return usersService.getAllUsers();
  }
}
