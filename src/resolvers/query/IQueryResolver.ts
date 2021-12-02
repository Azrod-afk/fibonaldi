import { IFiboContext, User } from "../../mods.ts";

export interface IQueryResolver {
  users(
    _parent: any,
    _args: any,
    { usersService }: IFiboContext,
    _info: any,
  ): User[];
}
