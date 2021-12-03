import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new Error("JWT token is missing");

  // Bearer token
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "b9c3718e6459abdea329de60504a68a3"
    ) as IPayload;
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) throw new Error("User not found");

    next();
  } catch (error) {
    throw new Error("Invalid JWT token");
  }
}
