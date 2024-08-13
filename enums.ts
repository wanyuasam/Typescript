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

    console.log(error);
}
printErrorMessage(LoginError.NoUser)
