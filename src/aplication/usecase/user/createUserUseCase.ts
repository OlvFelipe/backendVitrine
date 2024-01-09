import User from "../../../domain/entities/user";
import UserRepository from '../../../domain/repositories/user/userRepository';

class CreateUserUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(user: User): Promise<User> {
        const createdUser = await this.userRepository.createUser(user)
        return createdUser
    }
}

export default CreateUserUseCase;