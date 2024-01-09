import User from "../../entities/user";

interface UserRepository {
    createUser(user: Omit<User, 'id'>): Promise<User>
    getUserById(userId: number): Promise<User>
}
  
export default UserRepository;
