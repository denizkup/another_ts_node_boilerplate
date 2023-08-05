import userService from "../services/userService"

test("login", () => {
    expect(userService.login("deniz","blms")).toEqual(true);
    expect(userService.login("deniz","a")).toEqual(false);

})