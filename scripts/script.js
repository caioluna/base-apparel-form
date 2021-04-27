const DOM = {
    messageContainer: document.querySelector(".warning"),
    input: document.getElementById("email"),
    fieldsetWarning: document.querySelector(".error-icon"),

    addWarningHTML() {
        DOM.messageContainer.innerHTML = "Please provide a valid email"
        DOM.input.style.border = "2px solid #f96262"
        DOM.fieldsetWarning.classList.add('active')
    },

    resetWarning() {
        DOM.fieldsetWarning.classList.remove('active')
        DOM.messageContainer.innerHTML = ""
        DOM.input.style.border = ""
        DOM.input.value = ""
    },
}

const Form = {
    email: document.getElementById("email"),

    validateFields() {
        const email = document.getElementById("email").value
        const regEx = /^[a-zA-Z]+[\.|\_]?[a-zA-Z]+@[a-zA-Z]+[^\.?\_?]\.[a-zA-Z]{1,3}\.?[a-zA-Z]+?$/g
        const verificationOk = regEx.test(email)

        if (email === "" || !verificationOk ) {
            Form.errorWarning()
            throw new Error("Invalid email")
        } 
    },

    errorWarning() {
        DOM.addWarningHTML()
    },

    validInput() {
        DOM.resetWarning()
    },

    submit(event) {
        event.preventDefault()
        try {

            Form.validateFields()
            Form.validInput()
            alert("Formulario enviado!")

        } catch (error) {
            console.log(error.message)
        }
    },

}

