function login(username: string, password: string): boolean{
    
    if(username === "deniz" && password === "deniz"){
        return true;
    }
    return false
}

export default {login};