// enums - way to define a set of named constants be it either numeric or string values
// useful to represent a set of related values in a more readable and managable way.

// error can be unauthorised, user doesn't exist.... 
enum LoginError{
    Unauthorised = "unauthorised",
    NoUser = "User doesn't exist",
    WrongCredentials = "The credentials are wrong",
    Internal = "Experiencing and internal error"


}
const printErrorMessage = (error:LoginError) => {
    if(error == LoginError.Unauthorised){
        console.log("User not authorized");
    }
    else if(error == LoginError.NoUser){
        console.log("User does not exist");
    }
    else if(error == LoginError.WrongCredentials){
        console.log("Sorry, you entered wrong credentials");
    }
    else{
        console.log("We are experiencing an internal error!");
    }
}
printErrorMessage(LoginError.NoUser);


