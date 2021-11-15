import { User } from "../models/User.ts";
import { IUsersService } from "./IUsersService.ts";

export class UsersService implements IUsersService {
  constructor() {
    this._users = [new User(1, "toto", "tata")];
  }

  getAllUsers(): User[] {
    return this._users;
  }

  getUserByUsername(username: string): User | undefined {
    return this._users.find((value) => value.username == username);
  }

  createUser(username: string, password: string): User | null {
    if (!this.getUserByUsername(username)) {
      const user = new User(this._users.length + 1, username, password);
      this._users.push(user);
      return user;
    }

    return null;
  }

  private _users: User[];
}

export const serviceInstance: IUsersService = new UsersService();
