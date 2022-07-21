export const isNameValid = (newValue) => {
    if(newValue.length > 32 || newValue.length < 1){
        return false
    }
    console.log("name valid");
    return true
}
export const isPhoneValid = (newValue) => {
    if(newValue.length > 10 || newValue.length < 1){
        return false
    }
    console.log("phone valid");
    return true
}
export const isPasswordValid = (newValue) => {
    const pattern = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?]).+$"
      );
    if(newValue.length > 5 && newValue.length < 13 && pattern.test(newValue) ){
        console.log("password valid");
        return true
    }
    return false
}

export const fields = [{ id: "userName", name: "User Name", type: "string",maxLength:32 ,valid: isNameValid},
                  { id: "phoneNumber", name: "Phone Number", type: "number", maxLength:10 ,valid: isPhoneValid }, 
                  { id: "password", name: "Password", type: "password", maxLength:12 ,valid: isPasswordValid },
                  { id: "confirm", name: "Confirm Password", type: "password", maxLength:12 ,valid: isPasswordValid }]
