import {  useParams, Link} from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {callHelloworldBean} from './api/HelloWorldApiService'


export default function WelcomeComponent(){
const {username} = useParams();
//console.log(username);

const [message, setMessage] = useState(null);


function callHelloworld(){
       

    
    callHelloworldBean()
        .then( (response)=>successfulResponse(response))
        .catch((error)=>errorResponse(error))
        .finally(()=>console.log('cleanup')) 

}
function successfulResponse(response){
    setMessage(response.data.message)
    console.log(response);
}

function errorResponse(error){
     console.log(error);
}

    return (
        <div className="WelcomeComponent">
            <h1>  Welcome {username} to the ToDoApp !!</h1>
             <div>
                Manage Your todos -<Link to={'/todos'}>Click Here</Link>
            </div>
            <div>
                <button className='btn btn-success m-5' onClick={callHelloworld} >HelloWorlds</button>
            </div>

            <div className='task-info'>{message}
            
            </div>
        </div>
        
        
    )
}