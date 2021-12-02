import { User } from "../models/User.ts";
import { IUsersService } from "./IUsersService.ts";
import { Maybe } from "../mods.ts";

export class UsersService implements IUsersService {
  constructor() {
    this._users = [new User(1, "toto", "tata")];
  }

  getAllUsers(): User[] {
    return this._users;
  }

  exists(username: string): boolean {
      return this._users.some((value) => value.username() === username);
  }

  getUserByUsername(username: string): Maybe<User> {
    return this._users.find((value) => value.username() === username);
  }

  createUser(username: string, password: string): User {
    const user = new User(this._users.length + 1, username, password);
    this._users.push(user);
    return user;
  }

  private _users: User[];
}

export const serviceInstance: IUsersService = new UsersService();
