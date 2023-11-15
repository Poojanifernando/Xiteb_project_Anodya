// this is the very first page when project are loaded

import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import "./script.js";



const Landing = () => {

	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">

					<div className = "home" >
					<h1 style={{color:"#66CC66"}}><b>MediGo </b></h1>
					</div>
					
					<br /><br/>
					
					<h4>simple solution for medical prescription upload. </h4>
					
					<br/> <br/> <br/>
					<div className="buttons">
						<Link to="/register" className="btn btn-lg btn-block">
							Sign Up
						</Link>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Link to="/login" className="btn btn-lg btn-block">
							Login 
						</Link>
					</div>
				
				</div>
			</div>
		</section>
	);
};

export default Landing;
