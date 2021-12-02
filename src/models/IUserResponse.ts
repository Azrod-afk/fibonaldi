import { User, Maybe } from "../mods.ts";

export interface IUserResponse {
  status(): boolean;
  message(): Maybe<string>;
  user(): Maybe<User>;
}
