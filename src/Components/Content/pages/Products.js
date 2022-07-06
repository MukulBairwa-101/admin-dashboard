import React,{useEffect} from 'react'
import {useAppContext} from "../../../Context/AppContext";
import { DataGrid } from '@mui/x-data-grid';

import Dashboardcard from '../Dashboardcard';

const Products = () => {
    const {products,setProducts,activeTheme} = useAppContext();

    useEffect(() =>{
        if(!localStorage.getItem('SHOPMART_PRODUCTS')){
          localStorage.setItem('SHOPMART_PRODUCTS',JSON.stringify(products))
        }
        else{
           let tempData = JSON.parse(localStorage.getItem('SHOPMART_PRODUCTS'))
           setProducts(tempData);
          //  setRows();
        }
      },[])

       const columns = [
        { field: 'id', headerName: 'Id', width: 70 },
        { field: 'productname', headerName: 'Product', width: 130 },
        // { field: 'productimage', headerName: 'Product-image', width: 130 },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'subcategory', headerName: 'Sub-category', width: 130 },
        { field: 'season', headerName: 'Season', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        { field: 'discount', headerName: 'Discount', width: 130 },
        { field: 'actionIcons' , headerName: 'Actions', width: 130, 
        renderCell :(params)=> {
          return (
          <div className="actions-col flex" style={{ cursor: "pointer" }}>
            {/* <GrFormView  onClick={()=>viewUser(params.row.id)}  /> */}
             {/* <AiOutlineEdit className="edit-btn" onClick={()=>editUser(params.row.id)} />
             <MdOutlineDelete className="delete-btn" onClick={()=>deleteUser(params.row.id)} /> */}
           </div>
          )}
      },
      ];
    


      const rows =products.map((listItem,key)=>{
        return {
          id:key+1,
          firstName:listItem.firstName ,lastName:listItem.lastName ,userName:listItem.userName,email:listItem.email,
          usertoken:listItem.userToken,
          password:listItem.password ,
      }})








    return (
        <div>

        <div className="flex justify-content cards-container ">
            <Dashboardcard />    
          </div>
    
          <div>
            <button className= {`btn btn-add pointer ${activeTheme.btnClass}  `}  >Add {activeTheme.btnText}</button>
          </div>
     
    
          <div style={{ height: 400, width: '100%',backgroundColor: 'white',margin:'20px auto',borderRadius:'8px',fontFamily:"'Poppins', sans-serif"}}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
            </div>
    
    
    
            </div>
    )
}

export default Products;
