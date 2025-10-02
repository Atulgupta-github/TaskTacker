
import axios from "axios";

export function callHelloworldBean(){
    
    // use axios for call the rst api
 

    return axios.get('http://localhost:8080/hello-world-bean')
           


}