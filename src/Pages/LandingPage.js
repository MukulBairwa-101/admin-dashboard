import React,{useEffect} from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import {useNavigate} from "react-router-dom";
// components
// import Logo from "../Reusables/Logo";

const Landingpage = () => {
    const navigate = useNavigate();

    useEffect(() =>{
        AOS.init({
			duration:1000,
			easing:'ease-in',
			delay:500,
			offset:100
		});
    },[])

    const handleRoute = (path)=>{
        navigate(`/${path}`)
    }




    return (
        <div>
            <div className=" flex container-banner">

            <div data-aos="zoom-out" className="text-center">
                <h1 className="highlighted-text"> Admin <span className="white-text"> panel</span> </h1>
                {/* <Logo /> */} shopmart
            <div className="m-20">
                <button className="pointer btn btn-signup" onClick={()=>handleRoute('auth')}>Sign In</button>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Landingpage;
