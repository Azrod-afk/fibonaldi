import {
  IUsersService,
  LoginResponse,
  serviceInstance,
  User,
} from "../mods.ts";

export class MutationResolver {
  //     constructor(usersService: IUsersService)
  //     {
  //         this._usersService = usersService;
  //     }

  //  _usersService: IUsersService;

  createUser(_parent: any, { username, password }: any): User | null {
    // return this._usersService.createUser(username, password);
    return serviceInstance.createUser(username, password);
  }

  login(_parent: any, { username, password }: any): LoginResponse {
    // const user = this._usersService.getUserByUsername(username);
    const user = serviceInstance.getUserByUsername(username);
    if (user && user.password === password) {
      return new LoginResponse(true, "Login successful");
    }

    return new LoginResponse(false, "Wrong username or password");
  }
}
