// login page for any user

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { LoginCustomer } from "../../Services/AuthServices";
import Swal from 'sweetalert2';


const Login = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}


	const onSubmit = async (e) => {

		e.preventDefault();
		console.log("data",formData)
		let data = await LoginCustomer(formData);
		console.log("data", data?.data);
		if (data?.data?.userRole) {
			localStorage.setItem("token", data?.data?.token);
			localStorage.setItem("userRole", data?.data?.userRole);
			localStorage.setItem("user", data?.data?.user);
			navigate("/dashboard");
		}
		else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Login Failed!',
			})
		}
	};


	return (
		<div>
			

			<center>
			<br/><br/>
			<div style={{marginTop:'20px', marginBottom:'-60px', width:'700px', backgroundColor:''}}>
			<div>
			<br/>
			<h1 className="heading">Log In</h1>
			<br/>
			</div>
			<br/>
			<div style={{color:'black'}}>
			<p className="lead">
				<i className="fas fa-user"></i> Log Into Your Account
			</p>
			</div>
			<br />
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="link">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
			<br/>
			</div>
			</center>
			
			<br/><br/><br/><br/><br/><br/>
		</div>
		
	);
};


export default Login;
