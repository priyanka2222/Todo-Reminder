export const isEmptyData = (val) => val === "" ? true : false

export const isValidEmail = (val) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val)? true : false


export const isValidPassword = (val) => /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(val)? true : false