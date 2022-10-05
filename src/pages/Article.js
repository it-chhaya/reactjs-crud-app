import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import ArticleCard from "../components/ArticleCard"

const Article = () => {
    return (
        <Container className="mt-4">
            <Row className="g-3">
                <Col md={2} className="mb-4 w-100 text-start">
                    <Link to={"/addNew"} className="linkAddNew" variant="primary">Add New</Link>
                </Col>
            </Row>
            
            <ArticleCard />

        </Container>
    )
}

export default Article