import { BASE_URL } from "./Constants"

class CategoryService {

    fetchCategories = () => {
        return fetch(`${BASE_URL}/categories`)
    }

}

export default new CategoryService()