import userService from "../services/userService"

function login(): boolean {
    return userService.login("deniz","blms")
}

export default {login};