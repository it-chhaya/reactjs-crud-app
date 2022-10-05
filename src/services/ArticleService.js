import { BASE_URL } from "./Constants"


class ArticleService {

    fetchArticles = () => {
        return fetch(`${BASE_URL}/articles`, {
            method: 'GET'
        })
    }

    postArticle = (body) => {
        return fetch(`${BASE_URL}/articles`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
    }

}

export default new ArticleService()