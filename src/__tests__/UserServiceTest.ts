import userService from "../services/userService"

test("login", () => {
    expect(userService.login("deniz","deniz")).toEqual(true);
    expect(userService.login("deniz","a")).toEqual(false);

})