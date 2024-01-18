import Category from "../../entities/category";

interface CategoryRepository {
    listAllCategory(): Promise<Category>
}

export default CategoryRepository