import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";

import { AppError } from "../shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new AppError("JWT token is missing", 401);

  // Bearer token
  const [, token] = authHeader.split(" ");
  try {
    const { sub: user_id } = verify(
      token,
      "b9c3718e6459abdea329de60504a68a3"
    ) as IPayload;
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);
    if (!user) throw new AppError("User not found", 401);

    request.user = {
      id: user_id,
    };
    next();
  } catch (error) {
    throw new AppError("Invalid JWT token", 401);
  }
}
