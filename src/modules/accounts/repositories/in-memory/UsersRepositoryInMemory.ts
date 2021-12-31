import { ICreateUserDTO } from "../../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUserRepository } from "../IUserRepository";

export class UsersRepositoryInMemory implements IUserRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();
    Object.assign(user, {
      driver_license: data.driver_license,
      email: data.email,
      name: data.name,
      password: data.password,
    });
    this.users.push(user);
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
