import { IUsersService } from "../mods.ts";

export interface IFiboContext {
  request: Request;
  usersService: IUsersService;
}
