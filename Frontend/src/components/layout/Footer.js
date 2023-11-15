//footer of the project pages

import React, { Fragment } from "react";
import { useNavigate , Link} from "react-router-dom";


const Footer = () => {

	const navigate = useNavigate();

	let userRole = localStorage.getItem('userRole');
	

	return (
		<div>
			<div style={{marginTop:'0px'}}>
                 <footer className="bg-dark text-center text-white">
                   
                    <div className="container p-4 pb-0" >
                       
                        <section className="mb-4">
                     
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-facebook-f"></i
                        ></a>

                      
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-twitter"></i
                        ></a>

                      
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-google"></i
                        ></a>

                       
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-instagram"></i
                        ></a>


                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-linkedin-in"></i
                        ></a>

            
                        <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                            ><i className="fab fa-github"></i
                        ></a>
                        </section>
                       
                    </div>
                   

             
                    <div className="text-center p-3" style={{backgroundcolor:"rgba(0, 0, 0, 0.2)"}}>
                        © 2023 Copyright: 
                        <a className="text-white" href=""> MediGo</a>
                    </div>
     
                </footer>
			</div>
		</div>
		
	);
};



export default Footer;
