import { Col, Container, Row } from "react-bootstrap"
import PopularCard from "../components/PopularCard"
import RecentlyCard from "../components/RecentlyCard"
import Welcome from "../components/Welcome"

const Home = () => {
    return (
        <div>
            <Container className="mt-4">
                <Welcome />
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <PopularCard />
                    </Col>
                    <Col md={6}>
                        <RecentlyCard />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home