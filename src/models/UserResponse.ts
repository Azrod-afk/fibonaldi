import { User, Maybe, IUserResponse } from "../mods.ts";

export class UserResponse implements IUserResponse {
  constructor(status: boolean, message: Maybe<string> = null, user: Maybe<User> = null) {
    this._status = status;
    this._message = message;
    this._user = user;
  }

  private _status: boolean;
  private _message: Maybe<string>;
  private _user: Maybe<User>;

  status(): boolean {
    return this._status;
  }

  message(): Maybe<string> {
    return this._message;
  }

  user(): Maybe<User> {
    return this._user;
  }
}
