import { IUser } from "../mods.ts";
export class User implements IUser {
  constructor(id: number, username: string, password: string) {
    this._id = id;
    this._username = username;
    this._password = password;
  }

  private _id: number;
  private _username: string;
  private _password: string;

  id(): number {
    return this._id;
  }
  username(): string {
    return this._username;
  }
  password(): string {
    return this._password;
  }
}
