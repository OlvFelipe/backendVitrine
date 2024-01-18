import Category from "../../../domain/entities/category";
import CategoryRepository from "../../../domain/repositories/category/categoryRepository";

class ListAllCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    async execute(): Promise<Category> {
        const categories = await this.categoryRepository.listAllCategory()
        return categories
    }
}

export default ListAllCategoryUseCase