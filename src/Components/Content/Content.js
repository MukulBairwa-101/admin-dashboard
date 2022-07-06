import React,{useEffect} from "react";

import { useAppContext } from "../../Context/AppContext";
import Products from "./pages/Products";
import Users from "./pages/Users";
import AdduserForm from "./Forms/AdduserForm";
const Content = () => {
  const { collapsed, path,setPath } = useAppContext();

  useEffect(()=>{
    setPath(localStorage.getItem('ROUTE_PATH'));
  },[])

  let renderContent =
    path === "/admin/products" ? (
      <Products />
    ) : path === "/admin/users" ? (
      <Users />
    ) : path === "/admin/adduser" ? (
        <AdduserForm />
        )
      :null;

  return (
    <div
      className={`content-container ${
        collapsed ? "header-container-collapsed " : "header-container-open "
      }} `}
    >



      {renderContent}
    </div>
  );
};

export default Content;
