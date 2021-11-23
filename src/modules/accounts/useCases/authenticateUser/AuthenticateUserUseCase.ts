import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new Error("Email or password incorrect!");
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) throw new Error("Email or password incorrect!");
    const token = sign({}, "b9c3718e6459abdea329de60504a68a3", {
      subject: user.id,
      expiresIn: "1d",
    });
    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
