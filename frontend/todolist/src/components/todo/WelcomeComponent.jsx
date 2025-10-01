import {  useParams, Link} from 'react-router-dom';
export default function WelcomeComponent(){
const {username} = useParams();
//console.log(username);

    return (
        <div className="WelcomeComponent">
            <h1>  Welcome {username} to the ToDoApp !!</h1>
             <div>
                Manage Your todos -<Link to={'/todos'}>Click Here</Link>
            </div>
        </div>
        
        
    )
}