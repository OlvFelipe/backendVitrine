import { Request, Response } from 'express'    
import CreateUserUseCase from '../../aplication/usecase/user/createUserUseCase'
import GetUserProfileUseCase from '../../aplication/usecase/user/getUserProfileUseCase'
import PrismaUserRepository from '../../domain/repositories/user/PrismaUserRepository'
import User from '../../domain/entities/user'

class UserController {
  private createUserUseCase: CreateUserUseCase
  private getUserProfileUseCase: GetUserProfileUseCase

  constructor() {
    const prismaUserRepository = new PrismaUserRepository() 
    this.createUserUseCase = new CreateUserUseCase(prismaUserRepository)
    this.getUserProfileUseCase = new GetUserProfileUseCase(prismaUserRepository)
  }

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user = req.body
      const createdUser = await this.createUserUseCase.execute(user)
      res.status(201).json({ user: createdUser})
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  async getUserProfile(req: Request, res: Response): Promise<void> {
    try {
      const userId = req.params.userId
      const userProfile: any = await this.getUserProfileUseCase.execute(userId)

      if (userProfile.length > 0) {
        res.json(userProfile)
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' })
      }
    } catch (error) {
      console.log('error', error)
      res.status(500).json({ error: error })
    }
  }
}

export default UserController
