import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string().email().max(50).required(),
  password: Joi.string().min(6).max(15).required(),
});

export class authValidator {
  public static async authUser(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let result = await loginSchema.validate(req.body);

    if (result.error) {
      res.status(500).json(result.error);
    }
    next();
  }
}
