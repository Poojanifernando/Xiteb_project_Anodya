// this is the dashboard page when user login to the system this page will be loaded

//import all the necessary libaries
import React from "react";
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import dash from '../img/background.jpg';


const Dashboard = () => {

	return (
		<div >
			<center>
				<table>
					<tr>
						<td>
							<span style={{marginTop: '0px',marginBottom: '20px',color:"#00008B",fontSize:'50px', fontWeight:'bold'}}>Welcome to</span>
							<span style={{marginTop: '0px',marginBottom: '20px', color:"#66CC66", fontSize:'100px'}}> MediGO</span>
							<br/>
							<span style={{marginTop: '0px',marginBottom: '20px',color:"#778899",fontSize:'40px', fontWeight:'bold'}}>{localStorage.getItem("userRole")}:</span>
							<span style={{marginTop: '0px',marginBottom: '20px', color:"#778899", fontSize:'40px'}}> {localStorage.getItem("user")}</span>
							
						</td>
					
						<td>
							<img src={dash} style={{ width: 850, height:600,  marginBottom: '20px', marginLeft: '30px', marginRight: '10px', marginTop: '20px' }}></img>
						</td>
					</tr>
				</table>
			</center>
		</div>
	);
};


export default Dashboard;
