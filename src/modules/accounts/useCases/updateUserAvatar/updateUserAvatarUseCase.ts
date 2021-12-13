import { inject, injectable } from "tsyringe";

import { deleteFile } from "../../../../utils/file";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}
@injectable()
export class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);
    if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);
    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}