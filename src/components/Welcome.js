import '../assets/styles/Welcome.css'

const Welcome = () => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
			<div className="container-fluid py-5">
				<h1 id="welcomeHeading" className="welcome-heading display-5 fw-bold">Welcome to ISTAD</h1>
				<p className="fs-4">
					Using a series of utilities, you can create this jumbotron, just like
					the one in previous versions of Bootstrap. Check out the examples
					below for how you can remix and restyle it to your liking.
				</p>
				<button className="btn btn-primary btn-lg" type="button">
					Enroll Now
				</button>
			</div>
		</div>
	)
}

export default Welcome
