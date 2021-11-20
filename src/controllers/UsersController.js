import { allUsers } from "../services/Apiroutes";

export const getAllUsers = async () => {
    const response = await allUsers();
    if(response.status === 200){
        const json = await response.json();
        return json;
    }else{
        console.log('Response code @ getAllUsers: ' + response.status);
        return response.status
    }
}