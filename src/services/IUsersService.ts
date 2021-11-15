import { User } from "../models/User.ts";

export interface IUsersService {
  getAllUsers(): User[];
  getUserByUsername(username: string): User | undefined;
  createUser(username: string, password: string): User | null;
}
