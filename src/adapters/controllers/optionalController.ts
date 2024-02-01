import { Request, Response } from "express"
import ListAllOptionalUseCase from "../../aplication/usecase/optional/listOptionalUseCase"
import PrismaOptionalRepository from "../../domain/repositories/optional/PrismaOptionalRepository"

class OptionalController {
    private listAlloptionalUseCase: ListAllOptionalUseCase

    constructor(){
        const prismaOptionalRepository = new PrismaOptionalRepository()
        this.listAlloptionalUseCase = new ListAllOptionalUseCase(prismaOptionalRepository)
    }

    async listAllOptional(req: Request, res: Response) {
        try {
            const optional: any = await this.listAlloptionalUseCase.execute()

            if (optional.length > 0) {
                res.json(optional)
              } else {
                res.status(404).json({ message: 'Nenhum opicional encontrado' })
              }
        } catch (error) {
            
        }
    }
}

export default OptionalController