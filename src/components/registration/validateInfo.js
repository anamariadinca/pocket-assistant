export default function validateInfo(values) {
    let errors = {}

    if (!values.email.trim()) {
        errors.email = "Email required"
    } else if(!/^[a-zA-Z]{2,50}@upb.ro$|ana.maria.dinca.1411@gmail.com/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.phoneNumber.trim()) {
        errors.phoneNumber = "Phone number required"
    } else if(!/^\+407[0-9]{8}$|^07[0-9]{8}$/i.test(values.phoneNumber)) {
        errors.phoneNumber = "Phone number is invalid"
    }

    return errors;
}