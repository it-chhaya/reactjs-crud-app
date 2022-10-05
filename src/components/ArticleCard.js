import styles from '../assets/styles/ArticleCard.module.css'
import thumbnail from '../assets/images/thumbnail.jpg'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import ArticleService from '../services/ArticleService'

const ArticleCard = () => {
	const [articles, setArticles] = useState([
		{
			id: 0,
			attributes: {
				title: '',
				publishedAt: '',
			},
		},
	])
	const [isLoading, setIsLoading] = useState(false)

	const viewDetailByID = (id) => {
		console.log(id);
	}

	useEffect(() => {

		console.log('effected')
		ArticleService.fetchArticles()
			.then((res) => res.json())
			.then((res) => {
				setArticles(res.data)
				setIsLoading(true)
			})
	}, [])

	const formatDate = (timestamp) => {
		let d = new Date(Date.parse(timestamp))
		return `${d.getMonth()}-${d.getHours()}:${d.getMinutes()}`
	}

	return (
		<Row className="g-3">
			{ 

			!isLoading ? <h1>loading</h1> :

			articles.map(article => (
				<Col md={4} key={article.id}>
					<div className="card shadow-sm">
						<img src={thumbnail} alt="thumbnail" />

						<div className="card-body">
							<p className={styles.articleTitle}>
								{article.attributes.title}
							</p>
							<div className="d-flex justify-content-between align-items-center">
								<div className="btn-group">
									<button
										data-id={article.id}
										type="button"
										// onClick={() => viewDetailByID(article.id)}
										className="btn btn-sm btn-outline-secondary">
										View
									</button>
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary">
										Edit
									</button>
								</div>
								<small className="text-muted">
									{formatDate(article.attributes.publishedAt)}
								</small>
							</div>
						</div>
					</div>
				</Col>
			))}
		</Row>
	)
}

export default ArticleCard
