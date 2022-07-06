import React from 'react'
import {Routes,Route} from "react-router-dom";
// components

import Header from "../Components/Header/Header";

import Sidebar from "../Components/Sidebar/Sidebar" ;
import Content from "../Components/Content/Content"

// import Products from "../Components/Content/pages/Products";
// import Users from "../Components/Content/pages/Users";
// import AdduserForm from "../Components/Content/Forms/AdduserForm";

import { useAppContext } from "../Context/AppContext";

const Dashboard = () => {
    const { collapsed } = useAppContext();
    return (
        <div>
        
        <Sidebar /> 
        <Header />
        {/* <div
      className={`content-container ${
        collapsed ? "header-container-collapsed " : "header-container-open "
      }} `}
    >
  
    </div> */}



        <Content />


        </div>
    )
}

export default Dashboard;
