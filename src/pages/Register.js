import { useEffect, useState } from "react"

const Register = () => {

    const [data, setData] = useState([{
        "fullName": '',
        "email": '',
        "password": '',
        "confirmedPassword": ''
    }])

    // Declare variables state
    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [confirmedPassword, setConfirmedPassword] = useState('')

    const [user, setUser] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmedPassword: ''
    })

    // Add events
    const submitHandler = (event) => {

        event.preventDefault()

        // const user = {
        //     "fullName": fullName,
        //     "email": email,
        //     "password": password,
        //     "confirmedPassword": confirmedPassword
        // }

        // const data = []
        // data.push(user)
        
        // console.log(user)
        // setData(data)

        // Call API for insert user
        

    }

    const fullNameChangeHandler = (event) => {
        //setFullName(event.target.value)
        setUser((prevState) => {
            return {
                ...prevState,
                fullName: event.target.value
            }
        })
    }

    const emailChangeHandler = (event) => {
        //setEmail(event.target.value)
        setUser((prevState) => {
            return {
                ...prevState,
                email: event.target.value
            }
        })
    }

    const passwordChangeHandler = (event) => {
        //setPassword(event.target.value)
        setUser((prevState) => {
            return {
                ...prevState,
                password: event.target.value
            }
        })
    }

    const confirmedPasswordChangeHandler = (event) => {
        //setConfirmedPassword(event.target.value)
        setUser((prevState) => {
            return {
                ...prevState,
                confirmedPassword: event.target.value
            }
        })
    }

	return (
		<div className="container mt-4">
            <h1 className="text-start mb-4">Please fill your information</h1>
			<form onSubmit={submitHandler} className="needs-validation">
				<div className="row g-5">
					<div className="col-sm-6 text-start">
						<label for="firstName" className="form-label">
							Full Name
						</label>
						<input
                            onChange={fullNameChangeHandler}
                            name="fullName"
							type="text"
							className="form-control"
							id="fullName"
							placeholder="Enter full name"
						/>
						<div className="invalid-feedback">
							Valid first name is required.
						</div>
					</div>
					<div className="col-sm-6 text-start">
						<label for="firstName" className="form-label">
							Email
						</label>
						<input
                            onChange={emailChangeHandler}
                            name="email"
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter email"
						/>
						<div className="invalid-feedback">
							Valid first name is required.
						</div>
					</div>
					<div className="col-sm-6 text-start">
						<label for="firstName" className="form-label">
							Password
						</label>
						<input
                            onChange={passwordChangeHandler}
                            name="password"
							type="password"
							className="form-control"
							id="password"
							placeholder="Enter password"
						/>
						<div className="invalid-feedback">
							Valid first name is required.
						</div>
					</div>
					<div className="col-sm-6 text-start">
						<label for="firstName" className="form-label">
							Confirm Password
						</label>
						<input
                            onChange={confirmedPasswordChangeHandler}
                            name="confirmedPassword"
							type="password"
							className="form-control"
							id="confirmedPassword"
							placeholder="Enter password again"
						/>
						<div className="invalid-feedback">
							Valid first name is required.
						</div>
					</div>

					<div className="col-sm-12">
                        <button class="w-100 btn btn-primary btn-lg" type="submit">
                            Register
                        </button>
                    </div>
				</div>
			</form>

            <h2>{user.fullName}</h2>
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
            <h2>{user.confirmedPassword}</h2>
            {/* {
                data.map(d => (
                    <tr key={d.email}>
                        <td>{d.email}</td>
                        <td>{d.fullName}</td>
                        <td>{d.password}</td>
                        <td>{d.confirmedPassword}</td>
                    </tr>
                ))
            } */}

		</div>
	)
}

export default Register
