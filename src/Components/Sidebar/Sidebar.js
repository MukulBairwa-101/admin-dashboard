import React from 'react'
import {useNavigate} from "react-router-dom";

import {links} from "../../data/data";
import {useAppContext} from "../../Context/AppContext";
import {IoIosArrowBack,IoIosArrowForward} from "../../data/data";


const Sidebar = () => {

    const {collapsed,setCollapsed,setPath,path} = useAppContext();
    const navigate = useNavigate();

    const handleRoute =(route)=>{
      setPath(route);
      localStorage.setItem('ROUTE_PATH', JSON.stringify(path));
      navigate(route)
    }

    const  collapseSidebar =()=>{
      setCollapsed(!collapsed);
    }
    return (
        <div className="container-sidebar">
        <div className="flex flex-col container-wrapper ">
        <div className="flex  align-items sidebar-item  pointer" >
          <img src='/images/shopmartlogo.png' alt="logo" className="shopmart-logo" />
          <span className={collapsed ? 'item-title-hide':'item-title'}>SHOPMART</span>
        </div>

        {
          links.map((navItem,idx)=>{
            return(
            <div key={idx} className="flex  align-items sidebar-item pointer" onClick={()=>handleRoute(`${navItem.path}`)} >
              {<navItem.icon className="item-identifier" />}
            <span className={collapsed ? 'item-title-hide':'item-title'} >{navItem.link}</span>
          </div> 
            )
          })
        }

{
        !collapsed ?
        
        <IoIosArrowBack className="collapsable-icon pointer" onClick={collapseSidebar} />
        :
        <IoIosArrowForward className="collapsable-icon pointer" onClick={collapseSidebar} />
      }
    
        </div>
       
      
      </div>
    )
}

export default Sidebar
