import axios from 'axios';
import { baseUrl } from '../../config/axios-config';


export default function axiosBaseSetUp(AUTH_TOKEN="", CONTENT_TYPE='application/json') {
    if(axios.defaults.baseUrl !== baseUrl){
        axios.defaults.baseUrl = baseUrl;
    }
    if(AUTH_TOKEN){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
    }
    if(axios.defaults.headers.post['Content-Type'] !== CONTENT_TYPE){
        axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE;    
    }
}