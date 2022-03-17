import { IUser } from "../Models/IuserModel";
import { UserService } from "../service/indexService";
import { Request, Response } from "express";


export class UserController {
  public static user = async (req: Request, res: Response) => {
    try {
      let user: IUser = req.body;
      let userRegister = await UserService.user(user);

      return res.send(userRegister);
    } catch {
      return res.send(500);
    }
  };

  public static createUser = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      let user: IUser = req.body;
      let userRegister = await UserService.createUser(user);

      if (userRegister == null) {
        res.send(403);
      } else {
        res.status(200).send(200);
      }
    } catch (error) {
      res.send(500);
    }
  };
}
