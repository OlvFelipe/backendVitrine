import CategoryRepository from "./categoryRepository";
import prisma from '../../../adapters/database'

class PrismaCategoryRepository implements CategoryRepository {
    async listAllCategory(): Promise<any> {
        try {
            return await prisma.category.findMany()
        } catch (error) {
            return error
        }
    }
}

export default PrismaCategoryRepository