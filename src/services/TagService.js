import { BASE_URL } from "./Constants"

class TagService {

    fetchTags = () => {
        return fetch(`${BASE_URL}/tags`)
    }

}

export default new TagService()