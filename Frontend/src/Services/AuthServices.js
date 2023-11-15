import axios from 'axios';
import {StartUrl} from "../configs/Url.json";


let RegisterURL = StartUrl + "user/signup";
let LoginURL = StartUrl + "user/signin";
let AuthURL = StartUrl + "user/auth";
let getAllUsers = StartUrl + "user/getAllUsers";
let CreateUser = StartUrl + "user/createUser";
let UpdateUser = StartUrl + "user/updateUserById/";
let DeleteUser = StartUrl + "user/deleteUser/";
let GetUserByIDUrl = StartUrl + "user/getUserById/";


// function to add new user
export async function RegisterCustomer(data) {
    const alldata = {
        name:data.name,
        mobileno:data.mobileno,
        address:data.address,
        dateOfBirth:data.dateOfBirth,
        email:data.email,
        password:data.password,
        userRole:"user"
    };

    return await axios.post(RegisterURL,alldata);
}

//funtion to login for the any user
export async function LoginCustomer(data) {
    const alldata = {
        email:data.email,
        password:data.password,
    };
    
    return await axios.post(LoginURL,alldata);
}

//get auth token
export async function AuthCustomer(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

//for get all users
export async function GetallUsers(){
  return axios.get(getAllUsers);
}

// to create admin user
export async function CreateAdmin(data) {
  const alldata = {
      name:data.name,
      mobileno:data.mobileno,
      email:data.email,
      address:data.address,
      dateOfBirth:data.dateOfBirth,
      password:data.password,
      userRole:data.userRole
  };

  return await axios.post(CreateUser,alldata);
}

// to update admin details
export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      mobileno:data.mobileno,
      email:data.email,
      password:data.password,
      address:data.address,
      dateOfBirth:data.dateOfBirth,
      userRole:data.userRole
  };

  return await axios.patch(UpdateUser + id,alldata);
}

//to delete admin details
export async function DeleteAdmin(id) {
  return await axios.delete(DeleteUser + id);
}

export async function GetUserByID(id) {
  return await axios.get(GetUserByIDUrl + id);
}


