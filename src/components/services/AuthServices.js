import axios from 'axios';
import axiosBaseSetUp from './BaseService';

export async function userRegister(registerData)
{
    axiosBaseSetUp();
    const response = await axios.post('users/register', registerData)
    return response;
}

export function userLogin(loginData)
{
    axiosBaseSetUp();
    axios.post('http://localhost:80/api/users/login', loginData)
    .then(response => {
        if(response.data.hasOwnProperty('success') && response.data.success === true){
            console.log(response.data)
            localStorage.setItem('rela_token', 'Bearer ' + response.data.token);
        }
        else if(response.data.hasOwnProperty('success') && response.data.success === false){
            console.log("login data incorrect!");
        }
        else{
            console.log("login - coding error");
            console.log(response);
        }
    })
    .catch(error => {
        console.log("login - error:");
        console.log(error);
    })
}

export function userLogout()
{
    axiosBaseSetUp();
    axios.get('users/logout')
    .then(response => {
        if(response.data.hasOwnProperty('success') && response.data.success === true){
            console.log("logout successful!");
        }
        else if(response.data.hasOwnProperty('success') && response.data.success === false){
            console.log("logout could not be finished! try again...")
        }
        else{
            console.log('logout - coding error');
        }
    })
    .catch(error => {
        console.log('logout - error:');
        console.log(error);
    })
}