// user registration 


import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import { RegisterCustomer } from "../../Services/AuthServices";
import Swal from 'sweetalert2';
import { ValidateSignUp } from "./Validation";


const Register = () => {

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
		address:"",
		dateOfBirth:"",
		mobileno:"+94",
		userRole:"Customer"
	});

	const { name, email, password, password2 , address ,dateOfBirth, mobileno } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
		

	const onSubmit = async (e) => {

		e.preventDefault();

		let validate = ValidateSignUp(formData);

		if(validate.status == false)
		{
			alert(validate.message);
		}

		else{
				if (password !== password2) {
					alert("Password do not match...", "danger");
				} else {
					let data = await RegisterCustomer(formData);
					console.log("data",data)
					if(data?.data?.userRole)
					{
					localStorage.setItem("token",data?.data?.token);
					localStorage.setItem("userRole",data?.data?.userRole);
					localStorage.setItem("user",data?.data?.user);
					Swal.fire({
						icon: 'success',
						title: 'Congrats!',
						text: 'Registration successfull...!',
					})
					navigate("/login");
					}
					else
					{
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Registration Failed..!',
						})
					}
				}
			}
	};


	return (
		<div>
		
		<div className="register-form">
		<div style={{height:'90px', backgroundColor:"#66CC66"}}>
		<h1 className="heading"> <b>User Registration Form</b></h1>
		
			<p className="lead">
				<i className="fas fa-user"></i> Create Your Account
			</p>
		
		</div>
		<center>
					<div style={{height:'750px', backgroundColor:"white"}}>
			<table>
			
             <tr>
             <td>
            <div >
            <form  style={{backgroundColor:"#ebecf0", textAlign:'left'}} onSubmit={(e) => onSubmit(e)}>
            <br/>
            <div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
			
            <label className="form-label"><h4>Name of the User : </h4></label>
						<input type="text"
						class="form-control"
						placeholder="Full Name"
						// pattern="[a-zA-Z]*"
						// title="Cannot have numerical values"
						name="name"
						value={name}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Email Address : </h4></label>
                <input type="email"
						class="form-control"
						placeholder="Email Address - abc@gmail.com"
						name="email"
						pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
						title="Email type is wrong!"
						value={email}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
			<br/>
            <div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Create a Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Password - should be atleast 4 characters "
						name="password"
						minLength="6"
						value={password}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
			<br/>
           
    
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Confirm Password : </h4></label>
                <input type="password"
						class="form-control"
						placeholder="Confirm Password"
						name="password2"
						minLength="6"
						value={password2}
						onChange={(e) => onChange(e)} 
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Contact Number : </h4></label>
                <input type="text"
						class="form-control"
						placeholder="Mobile no"
						name="mobileno"
						maxLength="12"
						value={mobileno}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
            <br/>
			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Address : </h4></label>
                <input type="text"
						class="form-control"
						placeholder="address"
						name="address"
						maxLength="50"
						value={address}
						onChange={(e) => onChange(e)}
                
              />
            </div>
            <br/>

			<div className="Reg" style={{width:'600px', marginLeft:'10px', marginRight:'10px'}}>
              
            <label className="form-label"><h4>Date Of Birth : </h4></label>
                <input type="date"
						class="form-control"
						placeholder="Date of birth"
						name="dateOfBirth"
						value={dateOfBirth}
						onChange={(e) => onChange(e)}  
                
              />
            </div>
            <center>
            <input type="submit" className="btn-lg btn-secondary" value="Register" />
            </center>
			
            <br/>
            </form>
           
            </div>
            </td>
         
            <td>
            <center>
			&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 
			
             </center>
             </td>
             </tr>
             </table>
			 </div>
			 <br/>
			 </center>
			 </div>
			 </div>
			 

	);
};

export default Register;
