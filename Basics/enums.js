"use strict";
// enums - way to define a set of named constants be it either numeric or string values
// useful to represent a set of related values in a more readable and managable way.
// error can be unauthorised, user doesn't exist.... 
var LoginError;
(function (LoginError) {
    LoginError["Unauthorised"] = "unauthorised";
    LoginError["NoUser"] = "User doesn't exist";
    LoginError["WrongCredentials"] = "The credentials are wrong";
    LoginError["Internal"] = "Experiencing and internal error";
})(LoginError || (LoginError = {}));
const printErrorMessage = (error) => {
    if (error == LoginError.Unauthorised) {
        console.log("User not authorized");
    }
    else if (error == LoginError.NoUser) {
        console.log("User does not exist");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("Sorry, you entered wrong credentials");
    }
    else {
        console.log("We are experiencing an internal error!");
    }
};
printErrorMessage(LoginError.NoUser);
