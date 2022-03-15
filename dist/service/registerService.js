// // import { CONSTANTS } from "../Constant/messageConst";
// import { QueryResult } from "pg";
// import bcrypt from "bcryptjs";
// import { IUser } from "../Models/IuserModel";
// import { pool } from "../db/db";
// import { CONSTANTS } from "../Constant/messageConst";
// const SALT = 10;
// export class UserService {
//   public static async createUser(user: IUser): Promise<IUser[] | string> {
//     const findEmail: QueryResult = await pool.query(
//       `SELECT email FROM users WHERE email='${user.email}'`
//     );
//     if (findEmail.rows.length == 0) {
//       let hashPass = await bcrypt.hash(user.password, await bcrypt.genSalt(SALT));
//       const insertQuery: QueryResult = await pool.query(
//         `INSERT INTO users (firstname,lastname,email,password) VALUES ('${user.firstname}','${user.lastname}','${user.email}','${hashPass}')`
//       );
//       return CONSTANTS.registerSuccess;
//     } else {
//       return null;
//     }
//   }
// }
//# sourceMappingURL=registerService.js.map