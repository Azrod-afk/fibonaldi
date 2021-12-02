import {
  IFiboContext,
  IMutationResolver,
  UserResponse,
  IUserRequest
} from "../../mods.ts";

export class MutationResolver implements IMutationResolver {
  createUser(
    _parent: any,
    { username, password }: IUserRequest,
    { usersService }: IFiboContext,
    _info: any,
  ): UserResponse {
    if (usersService.exists(username))
      return new UserResponse(false, "User with username " + username + " already exists");
    else
    {
      const user = usersService.createUser(username, password);
      return new UserResponse(true, "User created sucessfully", user);
    }
  }

  login(
    _parent: any,
    { username, password }: IUserRequest,
    { usersService }: IFiboContext,
    _info: any,
  ): UserResponse {
    const user = usersService.getUserByUsername(username);
    if (user && user.password() == password) {
      return new UserResponse(true, "Login successful", user);
    }

    return new UserResponse(false, "Wrong username or password");
  }
}
