
import './TodoApp.css'
import { BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';

import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import ErrorComponent from './ErrorComponent';
import WelcomeComponent from './WelcomeComponent';
import LoginComonent from './LoginComonent';
import AuthProvider, { useAuth } from './security/AuthContext';


function AuthenticatedRoute({children}){
    const authContext = useAuth();
    if(authContext.isAuthenticated)
        return(children)
    else 
        return <Navigate to="/"/>
}



export default function TodoApp(){
    return(
        <div className="TodoApp">
                 <AuthProvider>   
                    <BrowserRouter>
                        <HeaderComponent/>
                        <Routes>
                            <Route path='/' element={<LoginComonent/>}></Route>
                            <Route path='/login' element={<LoginComonent/>}></Route>
                            <Route path='/welcome/:username' element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent/>
                                </AuthenticatedRoute>
                            }></Route>
                            <Route path='/todos' element={
                                <AuthenticatedRoute>
                                    <ListTodosComponent/>
                                </AuthenticatedRoute>
                                
                            }></Route>
                            <Route path='/logout' element={
                                <AuthenticatedRoute>
                                    <LogoutComponent/>
                                </AuthenticatedRoute>
                            }></Route>


                            <Route path='*' element={<ErrorComponent/>}></Route>
                        </Routes>
                        <FooterComponent/>
                    </BrowserRouter>
                </AuthProvider>

               
        </div>
    )
}




