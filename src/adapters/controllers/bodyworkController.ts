import { Request, Response } from 'express'
import GetBodyworkUseCase from '../../aplication/usecase/bodywork/getBodyworkUseCase'
import PrismaBodyworkRepository from '../../domain/repositories/bodywork/PrismaBodyworkRepository'

class BodyworkController {
    private getBodyworkById: GetBodyworkUseCase
    private listAllBodywork: GetBodyworkUseCase

    constructor() {
        const prismaBodyworkRepository = new PrismaBodyworkRepository()
        this.getBodyworkById = new GetBodyworkUseCase(prismaBodyworkRepository)
        this.listAllBodywork = new GetBodyworkUseCase(prismaBodyworkRepository)
    }


  async getBodyWorkById(req: Request, res: Response): Promise<void> {
    try {
      const bodyworkId = req.params.bodyworkId
      const bodywork: any = await this.getBodyworkById.execute(bodyworkId)

      if (bodywork.length > 0) {
        res.json(bodywork)
      } else {
        res.status(404).json({ message: 'Carroceria não encontrada' })
      }
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }

  async listAllBodyworks(req: Request, res: Response): Promise<void> {
    try {
      const bodywork: any = await this.listAllBodywork.executeAll()
  
      if (bodywork.length > 0) {
        res.json(bodywork)
      } else {
        res.status(404).json({ message: 'Nenhuma carroceria encontrada' })
      }
    } catch (error) {
      res.status(500).json({ error: error })
    }
  }
}

export default BodyworkController