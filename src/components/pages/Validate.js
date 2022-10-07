
const Validate = (values) => {
    let errors  = {};
    if(!values.name) {
        errors.name = "Name is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.contact) {
        errors.contact = "Contact is required"
    }
    if(!values.message) {
        errors.message = "Message is required"
    }
    return errors;
}
export default Validate