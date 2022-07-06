import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
const SaveDetails = () => {

  
    useEffect(() => {
        AOS.init();
    },[])


    

    return (
        <div className="blog-created " data-aos='fade-right '>
            <span>Details Saved </span>            
        </div>
    )
}

export default SaveDetails;