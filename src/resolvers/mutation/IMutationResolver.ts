import { IFiboContext, UserResponse, IUserRequest } from "../../mods.ts";

export interface IMutationResolver {
    createUser(parent: any, args: IUserRequest, context: IFiboContext, info: any): UserResponse;
    
    login(parent: any, args: IUserRequest, context: IFiboContext, info: any): UserResponse;
}
