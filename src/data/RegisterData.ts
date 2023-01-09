export const USER = {
    name: '',
    email: '',
    password: '',
    confirmPassowrd: ''
};

export const USER_VALID = {
    name: "^[A-Za-z0-9]{3,16}$",
    email: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
    password: "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,20}$"
}


