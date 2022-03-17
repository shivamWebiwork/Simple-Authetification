import { QueryResult } from "pg";
import { IUser } from "../Models/IuserModel";
import { pool } from "../db/db";
import bcrypt from "bcryptjs";

const SALT = 10;
export class UserService {
  public static async user(user: IUser): Promise<IUser[]> {
    const User: QueryResult = await pool.query(
      `SELECT firstname, lastname, email, password FROM users`
    );
    return User.rows;
  }
  public static async createUser(user: IUser): Promise<IUser[] | {}> {
    const findEmail: QueryResult = await pool.query(
      `SELECT email FROM users WHERE email='${user.email}'`
    );

    if (findEmail.rows.length == 0) {
      let hashPass = await bcrypt.hash(
        user.password,
        await bcrypt.genSalt(SALT)
      );

      const insertQuery: QueryResult = await pool.query(
        `INSERT INTO users (firstname,lastname,email,password) VALUES ('${user.firstname}','${user.lastname}','${user.email}','${hashPass}')`
      );

      return insertQuery;
    } else {
      return null;
    }
  }
}
