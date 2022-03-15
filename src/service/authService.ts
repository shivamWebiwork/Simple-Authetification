import { ILogin, IUser } from "../Models/IuserModel";
import { pool } from "../db/db";
import { QueryResult } from "pg";
import bcrypt from "bcryptjs";

const jwt = require("jsonwebtoken");

export class AuthService {
  public static async authUser(user: IUser): Promise<ILogin> {
    const authEmail: QueryResult = await pool.query(
      `SELECT email,password FROM users WHERE email='${user.email}'`
    );

    if (authEmail.rows.length > 0) {
      let compare = await bcrypt.compare(
        user.password,
        authEmail.rows[0].password
      );


      if (compare) {
        const token = jwt.sign({ email: user.email }, process.env.SECRET, {
          expiresIn: process.env.TOKEN_LIFE,
        });
        const refreshToken = jwt.sign({email:user.email}, process.env.REFRESHTOKEN,{
        }); 
        const obj = {
          token: token,
          refreshToken: refreshToken,
        };
        return obj;
      } else {
       return null;
      }
    } 
    else {
      return null;
    }
  }
}
