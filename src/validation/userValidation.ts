import Joi from "joi";
import { Request, Response, NextFunction } from "express";

const schema = Joi.object({
  firstname: Joi.string().min(3).max(20).required(),
  lastname: Joi.string().min(3).max(20),
  email: Joi.string().email().max(256).required(),
  password: Joi.string().min(3).max(20).required(),
});

export class userValidator {
  public static async validateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let result = await schema.validate(req.body);
    if (result && result.error) {
      res.status(500).json(result.error);
    }

    next();
  }
}
