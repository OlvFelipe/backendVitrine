import { Request, Response } from 'express'
import ListAllCategoryUseCase from '../../aplication/usecase/category/listAllCategoryUseCase'
import PrismaCategoryRepository from '../../domain/repositories/category/PrismaCategoryRepository'

class CategoryController {
    private listAllCategoryUseCase: ListAllCategoryUseCase

    constructor() {
        const primaCategoryRepository = new PrismaCategoryRepository()
        this.listAllCategoryUseCase = new ListAllCategoryUseCase(primaCategoryRepository)
    }

    async listAllCategory(req: Request, res: Response) {
        try {
            const categories: any = await this.listAllCategoryUseCase.execute()

            if (categories.length > 0) {
                res.json(categories)
              } else {
                res.status(404).json({ message: 'Nenhuma categoria encontrada' })
              }
        } catch (error) {
            
        }
    }
}

export default CategoryController
