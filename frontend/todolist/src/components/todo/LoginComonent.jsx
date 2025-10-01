
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useAuth } from './security/AuthContext';
export default function LoginComonent(){
    const [username,setUsername] =useState();
    const [password,setPassword] =useState();

    const [showSuccessMessage,setShowSuccessMessage] =useState(false);
    const [showErrorMessage,setShowErrorMessage] =useState(false);

    const navigate  = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event){
        setUsername(event.target.value)
        //console.log(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    
    }

    
    function handleSubmit(){
        
        if(authContext.login(username,password)){
           
            //setShowSuccessMessage(true);
            setShowErrorMessage(false);
            navigate(`/welcome/${username}`) 
            
        }else{
            authContext.setAuthenticated(false); 
            setShowSuccessMessage(false);
            setShowErrorMessage(true);
        }
    }



    return(
        <div className="Login">
            <h2> Time to Login..</h2>
            
           
            {showErrorMessage && <div className='errorMessage'>Unauthenticated user. please check your credentials</div>}      
            <div className="Login Form">
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" placeholder='Input username' value={username}
                    onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='Input password' value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}




