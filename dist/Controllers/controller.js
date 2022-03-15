// import { pool } from "../db/db";
// import jwt from "jsonwebtoken";
// import { CONSTANTS } from "../Constant/messageConst";
// import { schema } from "../validation/userValidation";
// import { loginSchema } from "../validation/authValidation";
// import { Request, Response } from "express";
/**
 * This function is used to create a user being passed from payload
 * params req:Request, res:Response
 * return
 */
// export const createUser = (req: Request, res: Response) => {
//     const { firstname, lastname, email, password } = req.body;
//     let result = schema.validate(req.body);
//   if (result.error) {
//     res.status(400).send(result.error);
//     return;
//   } else {
//     const findEmail = `SELECT email FROM users WHERE email='${email}'`;
//     const query = `INSERT INTO users (firstname,lastname,email,password) VALUES ('${firstname}','${lastname}','${email}','${password}')`;
//     pool.connect((err, client, release) => {
//       if (err) {
//         return console.error(CONSTANTS.errorAcquiring, err.stack);
//       }
//       client.query(findEmail, (err, result) => {
//         if (err) {
//           release();
//             return console.error(CONSTANTS.errorExcuting, err.stack);
//         } else {
//           let existingEmail = null;
//           if (result.rows.length > 0) {
//             existingEmail = result?.rows[0].email;
//           }
//           if (existingEmail) {
//             return res.status(409).json({
//               error: CONSTANTS.emailExist,
//             });
//           } else {
//             client.query(query, (err, result) => {
//               release();
//               if (err) {
//                 return console.error(CONSTANTS.errorExcuting, err.stack);
//             } else {
//                 res.send(CONSTANTS.registerSuccess);
//          }
//        return;
//             });
//           }
//         }
//       });
//     });
//   }
// };
// export const login = async (req, res) => {
//   const { email, password } = req.body;
//   let result = loginSchema.validate(req.body);
//   if (result.error) {
//     res.status(400).send();
//     return;
//   } else {
//   }
//   const query = `SELECT email,password FROM users WHERE email='${email}'`;
//   pool.connect((err, client, release) => {
//     if (err) {
//       return console.error(CONSTANTS.errorAcquiring, err.stack);
//     }
//     client.query(query, (err, result) => {
//       release();
//       if (err) {
//         return console.error(CONSTANTS.errorExcuting, err.stack);
//       }
//       if (result.rows.length == 0) {
//         res.status(404).send(CONSTANTS.userNotExist);
//       }
//       if (result.rows.length > 0) {
//         if (result.rows[0].password == password) {
//           const token = jwt.sign({ email:email },process.env.SECRET, {
//               expiresIn: process.env.TOKEN_LIFE
//           });
//           const refreshToken = jwt.sign({ email }, process.env.REFRESHTOKEN, {
//             expiresIn: process
//           });
//           const obj = {
//             status: CONSTANTS.status,
//             token: token,
//             refreshToken: refreshToken,
//           };
//           res.send(obj);
//         } else {
//           res.status(403).send(CONSTANTS.pswIncorrect);
//         }
//       }
//     });
//   });
//   return;
// };
// export const getUser = (req, res)=>{
//   res.send("email...")
// }
// export const users = (req: Request, res: Response) => {
//   const query = `SELECT firstname, lastname, email, password FROM users`;
//   pool.connect((err, client, release) => {
//     if (err) {
//       return console.error("CONSTANTS.errorAcquiring, err.stack");
//     }
//     client.query(query, (err, result) => {
//       release();
//       if (err) {
//         return console.error(CONSTANTS.errorExcuting, err.stack);
//       }
//       res.send(result.rows);
//     });
//   });
// };
//# sourceMappingURL=controller.js.map