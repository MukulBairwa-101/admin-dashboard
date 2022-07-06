import React,{useEffect,useState} from "react";
import { Routes ,Route, Navigate } from 'react-router-dom';

import {useAppContext} from "./Context/AppContext";


// // components

import Header from "./Components/Header/Header";

import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";

// import Users from "./Components/Content/pages/Users";



// pages
import LandingPage from './Pages/LandingPage';
import Dashboard from './Pages/Dashboard';
import Auth from "./Pages/Auth.js";




// styles
import './App.css';
import "./styles/auth.css"; 
import "./styles/dashboard.css";
import "./styles/dashboardpages.css";

function App() {

  const {isLoggedIn,setIsLoggedIn, adminUser} = useAppContext();
  // const [log,setLog]= useState();

useEffect(()=>{
  if(!localStorage.getItem('ADMIN_USER')){
    localStorage.setItem('ADMIN_USER',JSON.stringify(adminUser));
  }

  
  if(!sessionStorage.getItem('ADMIN_LOGIN_SESSION')){

    sessionStorage.setItem('ADMIN_LOGIN_SESSION',JSON.stringify(isLoggedIn));
  }else{
  let d =JSON.parse(sessionStorage.getItem('ADMIN_LOGIN_SESSION'))
    setIsLoggedIn(d);
  }
  

  
},[])


console.log(isLoggedIn);



  return (
    <div className="App">
      {/* {window.location.pathname !=="/auth"    ? 
      <div>
        <Sidebar /> 
        <Header />
       </div>
      :null } */}

      
  

          <Routes>
            {/* pages */}
  
            <Route path ='/' element={<LandingPage />} />
            <Route path ='/auth' element={<Auth />} />


            {/* <Route path="/admin/dashboard" element={<Dashboard />} /> */}
    

           
            <Route  path ='/admin/dashboard' element={ isLoggedIn.status ? <Dashboard />:<Navigate to ="/auth" replace="true" /> } /> 

            {/* dashboard routes */}

            <Route path ='/admin/users' element={<Dashboard />} />
            <Route path ='/admin/adduser' element={<Dashboard />} />
            <Route path ='/admin/products' element={<Dashboard />} />
          </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
