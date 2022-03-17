import { json } from "body-parser";
import { CONSTANTS } from "../Constant/messageConst";

const jwt = require("jsonwebtoken");
const config = process.env;

export class JWT {
  public static verifyToken = async (req, res, next) => {
    try {
      let token = req.headers.authorization;

      if (token) {
        await jwt.verify(
          token,
          process.env.SECRET,
          function (err, verifiedJwt) {
            if (err) {
              res.status(401).send(err.message); //
            } else {
              req.user = verifiedJwt;
              return next();
            }
          }
        );
      } else {
        res.send(CONSTANTS.verifiyTokenRequired);
      }
    } catch (err) {
      res.json(400);
    }
  };
}
