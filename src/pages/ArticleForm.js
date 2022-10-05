import { useEffect, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ArticleService from '../services/ArticleService'
import CategoryService from '../services/CategoryService'
import TagService from '../services/TagService'

const ArticleForm = () => {

	const [article, setArticle] = useState({
		title: '',
		slug: '',
		category: 0,
		content: '',
		tags: [],
		thumbnail: 3,
		users_permissions_user: 1
	})

	const [tagIds, setTagIds] = useState([])

	const [categories, setCategories] = useState([
		{
			id: 0,
			attributes: {
				title: '',
			},
		},
	])

	const [tags, setTags] = useState([
		{
			id: 0,
			attributes: {
				title: '',
			},
		},
	])

	useEffect(() => {

		CategoryService.fetchCategories()
			.then((res) => res.json())
			.then((res) => {
				setCategories(res.data)
			})


		TagService.fetchTags()
			.then(res => res.json())
			.then(res => {
				setTags(res.data)
			})

	}, [])


	const articleValueChangeHandler = (e) => {
		const {name, value} = e.target
		setArticle(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}


	const tagChangeHandler = (e) => {
		if (e.target.checked) {
			setTagIds(prevState => {
				return [
					...prevState,
					e.target.value
				]
			})
		} else {
			let index = tagIds.indexOf(e.target.value)
			tagIds.splice(index, 1)
		}
	}


	const articleSubmitHandler = (e) => {
		e.preventDefault()

		article.tags = tagIds
		
		const body = {
			"data": article
		}

		ArticleService.postArticle(body)
			.then(res => res.json())
			.then(res => {
				console.log(res)
			})

	}


	return (
		<Container className="mt-4">
			<h1 className="text-start fw-bold">Add a new article</h1>
			<hr />
			<Form onSubmit={articleSubmitHandler}>
				<Row>
					<Col md={6} className="text-start">
						<Form.Group className="mb-3" controlId="formBasicTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								name="title"
								type="text"
								placeholder="How to learn web design"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicSlug">
							<Form.Label>Slug</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								name="slug"
								type="text"
								placeholder="how-to-learn-web-design"
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicContent">
							<Form.Label>Content</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								name="content" as="textarea" rows={4} />
						</Form.Group>

						<Button variant="primary" type="submit">
							Save
						</Button>
					</Col>
					<Col md={6} className="text-start">
						{/* Start Categories */}
						<Form.Group className="mb-3" controlId="formBasicCategory">
							<Form.Label>Category</Form.Label>
							<Form.Select
								onChange={articleValueChangeHandler}
								defaultValue={0} name="category" aria-label="Article Category">
								<option disabled value="0">
									Choose category
								</option>
								{
									categories && categories.map((category) => (
										<option key={category.id} value={category.id}>
											{category.attributes.title}
										</option>
									))
								}
							</Form.Select>
						</Form.Group>
						{/* End Categories */}

						<Form.Group className="mb-3">
							<Form.Label>Tag</Form.Label>
							{
								tags && tags.map(tag => (
									<Form.Check
										onChange={tagChangeHandler}
										key={tag.id}
										value={tag.id}
										label={tag.attributes.title}
										name="tags" />
								))
							}
						</Form.Group>

					</Col>
				</Row>
			</Form>
		</Container>
	)
}

export default ArticleForm
