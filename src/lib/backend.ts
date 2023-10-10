import axios from "axios";
export const baseUrl = "http://localhost:5231/api";

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

        const newJwtToken = response.data;

        setJwtToken(newJwtToken);

        console.log(newJwtToken);
    }
    catch{
        setJwtToken("");
    }
}

