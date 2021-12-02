import { IFiboContext, IUsersService } from "../mods.ts";

export class FiboContext implements IFiboContext
{
    constructor(request: Request, usersServices: IUsersService)
    {
        this.request = request;
        this.usersService = usersServices;
    }

    request: Request;
    usersService: IUsersService;
}