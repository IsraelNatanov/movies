import axios from "axios";

export const API_URL =  "http://localhost:9000";


//for get method
export const doApiGet = async(_url:string) => {
 
    
    try {
        let resp = await axios.get(_url, {
            headers: {
               
                'content-type': "application/json"
            }
        })
        return resp;
    } catch (err) {
        throw err;
    }
}

