import { IUsersService, serviceInstance, User } from "../mods.ts";

export class QueryResolver {
  // constructor(usersService: IUsersService)
  // {
  //     this._usersService = usersService;
  // }

  // private _usersService: IUsersService;

  users(): User[] {
    // return this._usersService.getAllUsers();
    return serviceInstance.getAllUsers();
  }
}
