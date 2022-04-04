export default function validateInfo(values) {
    let errors = {}
    let regExp = new RegExp("^(?=.*[0-9])(?=.*[- ?!@#$%^&*\\/\\\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\\/\\\\]{8,30}");

    if (!values.password.trim()) {
        errors.password = "Password required"
    } else if(!regExp.test(values.password)) {
        errors.password = "Password does not respect requirements"
    }

    if (!values.password2.trim()) {
        errors.password2 = "Password required"
    }

    if(values.password !== values.password2) {
        errors.password = "Passwords do not match"
    }
    return errors;
}