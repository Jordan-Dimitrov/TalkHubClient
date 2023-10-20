import axios from "axios";
export const baseUrl = "http://localhost:5231/api";
import { goto } from '$app/navigation';

let jwtToken: string = "";

export function setJwtToken(token: string) {
    jwtToken = token;
}

export function getJwtToken() {
    return jwtToken;
}

export async function refreshJwtToken() {
    try{
        const response = await axios({
            method: 'post',
            url: `${baseUrl}/User/refresh-token`,
            withCredentials: true,
        });

        if(response.status === 200){
            const newJwtToken = response.data;

            setJwtToken(newJwtToken);
    
            console.log(newJwtToken);
        }else
        {
            console.log("Error refreshing token");
            goto('/login');
        }
    }
    catch{
        setJwtToken("");
        console.log("Error refreshing token");
        goto('/login');
    }
}

