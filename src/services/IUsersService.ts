import { User } from "../models/User.ts";
import { Maybe } from "../mods.ts";

export interface IUsersService {
  getAllUsers(): User[];
  exists(username: string): boolean;
  getUserByUsername(username: string): Maybe<User>;
  createUser(username: string, password: string): User;
}
