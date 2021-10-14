import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  public handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    this.createCategoryUseCase.execute({ name, description });
    console.log(name);
    return response.status(201).send();
  }
}
