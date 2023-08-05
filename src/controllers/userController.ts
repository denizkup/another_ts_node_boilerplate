import userService from "../services/userService"

function login(): boolean {
    return userService.login("deniz","deniz")
}

export default {login};