import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

interface ICreateUserRequest extends Request {
  body: {
    name: string;
    username: string;
    password: string;
    email: string;
    driver_license: string;
  };
}

export class CreateUserController {
  async handle(
    request: ICreateUserRequest,
    response: Response
  ): Promise<Response> {
    const { name, username, email, password, driver_license } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    const userData = { name, username, email, password, driver_license };
    await createUserUseCase.execute(userData);
    return response.status(201).send();
  }
}
