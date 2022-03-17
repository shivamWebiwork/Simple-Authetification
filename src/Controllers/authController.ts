import { IUser } from "../Models/IuserModel";
import { Request, Response } from "express";
import { AuthService } from "../service/indexService";

export class AuthController {
  public static authUser = async (req: Request, res: Response) => {
    try {
      let user: IUser = req.body;
      let userLogin = await AuthService.authUser(user);
      
      if(userLogin==null){
        res.send(401);
      }else{
        res.status(200).send(userLogin);
      }

    } catch (error) {
     res.send(500);  
    }
  };
}

