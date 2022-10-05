import './App.css'
import Home from './pages/Home'
import Article from './pages/Article'
import About from './pages/About'
import { Routers, Router, Routes, Route } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import MainNavbar from './components/MainNavbar'
import MainFooter from './components/MainFooter'
import Register from './pages/Register'
import ArticleForm from './pages/ArticleForm'

function App() {
	return (
		<div className="App">

			<MainNavbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/article" element={<Article />} />
				<Route path="/addNew" element={<ArticleForm />}/>
				<Route path="/about" element={<About />} />
				<Route path="/register" element={<Register />}  />
			</Routes>

			<MainFooter />

		</div>
	)
}

export default App
