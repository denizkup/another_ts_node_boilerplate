function login(username: string, password: string): boolean{
    
    if(username === "deniz" && password === "blms"){
        return true;
    }
    return false
}

export default {login};