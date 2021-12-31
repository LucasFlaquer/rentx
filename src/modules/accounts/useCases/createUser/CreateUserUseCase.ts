import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@errors/AppError";
import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { ICreateUserDTO } from "@modules/dtos/ICreateUserDTO";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists");
    }
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({
      email,
      driver_license,
      password: passwordHash,
      name,
    });
  }
}
