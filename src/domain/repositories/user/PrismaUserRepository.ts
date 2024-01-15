import UserRepository from './userRepository';
import prisma from '../../../adapters/database';

class PrismaUserRepository implements UserRepository {
  async createUser(user: any): Promise<any> {
    try {
      return await prisma.user.create({
        data: user,
      })
    } catch (error) {
      return error 
    }
  }

  async getUserById(userId: string): Promise<any> {
    return await prisma.user.findMany({
      where: { id: userId },
    })
  }
}

export default PrismaUserRepository;