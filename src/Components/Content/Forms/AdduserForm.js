import React,{useState,useContext,useEffect} from 'react'
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../Context/AppContext";
import Swal from "sweetalert2";
import {FaUser,MdFingerprint,  FaEye,FaEyeSlash} from "../../../data/data";

import axios from "axios";

const REACT_APP_USERS_ENDPOINT = 'http://localhost:3000/users'

const AdduserForm = () => {

    const {users,setUsers,editingUser,rowId,setIsSaved,setPath,path} = useAppContext();
    const navigate = useNavigate();



    const [user,setUser] = useState({
        firstName: '',
        lastName: '',
        userName:'',
        email:'',
        password:'',
        userToken:''

    })
    const [passwordVisibility,setPasswordVisibility] = useState(false);
    const [validationErrors,setValidationErrors] = useState({});

    
    useEffect(() => {
        if(editingUser){
            setUser({
                firstName: editingUser.firstName,
                lastName: editingUser.lastName,
                userName:editingUser.userName,
                email:editingUser.email,
                password:editingUser.password,
                userToken:editingUser.userToken
        
            }
            )
        }


    },[])
    
    
    // handlers


    
    const validation =()=>{
        
        let validationError ={}

        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if(!user.firstName){
            validationError.firstName = "Field is required";
        }
        if(!user.lastName){
            validationError.lastName = "Field is required";
        }
        
        if (!user.email) {
            validationError.email = "Field is required";
        } else if (!emailRegex.test(user.email)) {
            validationError.email = "Please enter a valid email";

        }

        if(!user.password){
            validationError.password = "Field is required";

        }
        else if(!passwordRegex.test(user.password)){
            validationError.password ='please enter valid password';

        }
        

        return validationError;


    }



    const handleChange = (e)=>{
       const {name,value} = e.target;
       user.userName = user.firstName + " " + user.lastName
       setUser({...user,[name]:value}) ;
    }
    
    const togglePassword =(e)=>{
        const {name,value} = e.target;
        if(name ===  value){
            setPasswordVisibility(!passwordVisibility);
        }
    }

    const addingUser =(e)=>{
        e.preventDefault();
        let isErrors = validation();
        console.log(isErrors);

        

        if(Object.keys(isErrors).length === 0){

                    let usersList = JSON.parse(localStorage.getItem('USERS'));

                    let found = usersList.find(el => el.email == user.email)

                    if(found){
                        Swal.fire({
                            title: "Error adding user !",
                            text: `User already exists`,
                            icon: "error",
                            confirmButtonText: "Ok",
                        })
                    }
                    else{
                        Swal.fire({
                            title: "ok adding users !",
                            text: ``,
                            icon: "success",
                            confirmButtonText: "Ok",
                        })
                        .then((result)=>{
                            if(result.isConfirmed){
                                
                                const getUserToken =()=>{
                                    user.userToken = Date.now();
                                }
                                
                                getUserToken();
                                // console.log(user);
                                users.push(user);

                                axios.post(REACT_APP_USERS_ENDPOINT,
                                    // headers: {
                                    //     "Content-Type": "application/json",
                                    //   },
                                      
                                      {
                                        "id":users.length,
                                        "firstName":user.firstName,
                                        "lastName":user.lastName,
                                        "username":user.userName,
                                        "email":user.email,
                                        "usertoken":user.userToken,
                                        "password":user.password
                                      
                                })
                       

                                
                                // setUsers([...users,user]);
                                console.log(users);
                                localStorage.setItem('USERS',JSON.stringify(users));
                                setPath('/admin/users')
                                navigate(path);
                            }
                        })
                    }
                }


           
            else {
                setValidationErrors(isErrors);
                Swal.fire({
                    title: "Error adding users !",
                    text: `Check entry fields`,
                    icon: "error",
                    confirmButtonText: "Ok",
                  })
        }
    }


    const save = ()=>{
        // alert('execution is thre')
        // let userList = JSON.parse(localStorage.getItem('USERS'));
        // alert(rowId,"..... dsndns")
        // userList[rowId-1] = user;
        // localStorage.setItem('USERS', JSON.stringify(userList))

        setIsSaved(true);
        setTimeout(() => {
            setIsSaved(false);
        }, 3000);
        setPath('/admin/users')
        // localStorage.setItem('ROUTE_PATH', JSON.stringify(path));

        axios.patch(`${REACT_APP_USERS_ENDPOINT}/${rowId-1}`,
            user

            )
        
        navigate(path);
    }

    return (
        <div className="user-form-container">
            <form className="user-form" onSubmit={addingUser}>
                <div className=" ">
                    <label>Firstname</label>
                    <input type="text" name="firstName" value={  user.firstName} className="user-form-input " onChange={handleChange} />
                    <span>{validationErrors.firstName}</span>
                </div>
                <div className="">
                    <label>Lastname</label>
                    <input type="text" name="lastName" value={  user.lastName} className="user-form-input " onChange={handleChange} />
                    <span>{validationErrors.lastName}</span>
                </div>  
                <div className="">
                    <label>Username</label>
                    <input type="text" name="userName" value={   user.userName }  className="user-form-input " onChange={handleChange} />
                </div>
                <div className="">
                    <label>Email</label>
                    <input type="email" name="email" value={   user.email}  className="user-form-input " onChange={handleChange} />
                    <span>{validationErrors.email}</span>
                </div>
                <div className="">
                    <label>Password</label>
                    <input type={passwordVisibility ? 'text':'password' }  name="password" value={  user.password }  onChange={handleChange} />
                    {    passwordVisibility  ? 
                <FaEyeSlash   onClick={togglePassword} className="pointer togglePassword" />   
                :
                <FaEye   onClick={togglePassword} className="pointer togglePassword" />
            }
                <span>{validationErrors.password}</span>
                </div>  
                <div>
                    <button type="submit" className="btn"  >ADD</button>
                </div>  
            </form>            
                <div>
                    <button type="submit" className="btn pointer" onClick={save}>Save</button>
                </div>    
        </div>
    )
}

export default AdduserForm;
