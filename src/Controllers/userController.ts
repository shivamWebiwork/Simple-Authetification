import { IUser } from "../Models/IuserModel";
import { UsersService } from "../service/userService";
import { Request, Response } from "express";
// import { UserService } from "../service/registerService";

export class UserController {
  public static user = async (req: Request, res: Response) => {
    try {
      let user: IUser = req.body;
      let userRegister = await UsersService.user(user);

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
      let userRegister = await UsersService.createUser(user);
     
      
     if(userRegister==null){
       res.send(403);
     }else{
       res.status(200).send(200)
     }
     
    } catch (error) {
      res.json(500);
    
    }
  };
}
