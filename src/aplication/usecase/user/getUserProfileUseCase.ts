import User from "../../../domain/entities/user";
import UserRepository from "../../../domain/repositories/user/userRepository";

class GetUserProfileUseCase {
    constructor(private userRepository: UserRepository) {}

    async execute(userId: number): Promise<User> {
        const userProfile = await this.userRepository.getUserById(userId)
        return userProfile
    }
}

export default GetUserProfileUseCase;