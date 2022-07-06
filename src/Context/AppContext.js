import React ,{createContext,useState,useContext} from "react";

const AppContext = createContext();

export const Provider = ({children})=>{

    const [isLoggedIn,setIsLoggedIn]= useState({
        name:'',
        status:false
    });

    const [adminUser,setAdminUser]= useState( {
        name:'Mukul Kumar',
        email:'mukulkumaradmin@gmail.com',
        isAdmin:true,
        password:'adminMukulbairwa@123',
        profileSrc:'/images/profile.jpg'

    })
    const [collapsed,setCollapsed]= useState(false);

    const [users,setUsers]= useState([]);
    const [products,setProducts]= useState([]);
    const [path,setPath]= useState('');
    const [activeTheme,setActiveTheme]= useState({})

    const [editingUser,setEditingUser]= useState(
        { 
        firstName: '',
        lastName: '',
        userName:'',
        email:'',
        password:'',
        userToken:''

    }
        
    );
    const[rowId,setRowId]= useState(1); 
    const [isSaved,setIsSaved]= useState(false);

    
    return (
        <AppContext.Provider
        value={{isLoggedIn,setIsLoggedIn,adminUser,setAdminUser,collapsed,setCollapsed,users,setUsers,products,setProducts,path,setPath,activeTheme,setActiveTheme,editingUser,setEditingUser,rowId,setRowId,isSaved,setIsSaved}}
        
        >
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext =()=>useContext(AppContext);