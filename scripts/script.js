const DOM = {
    messageContainer: document.querySelector(".warning"),
    emailInput: document.getElementById("email"),
    fieldsetWarning: document.querySelector(".error-icon"),

    addWarningHTML() {
        DOM.messageContainer.innerHTML = "Please provide a valid email"
        DOM.emailInput.style.border = "2px solid #f96262"
        DOM.fieldsetWarning.classList.add('active')
    },

    resetWarning() {
        DOM.fieldsetWarning.classList.remove('active')
        DOM.messageContainer.innerHTML = ""
        DOM.emailInput.style.border = ""
        DOM.emailInput.value = ""
    },
}

const Form = {
    emailInput: document.getElementById("email"),
    regEx: /^[a-zA-Z]+[\.|\_]?[a-zA-Z]+@([a-zA-Z]+[^\.?\_?])\.[a-zA-Z]{1,}\.?[a-zA-Z]+?$/g,
    errorDiv: document.querySelector(".error-icon"),
    messageContainer: document.querySelector(".warning"),

    trackWarning() {

        Form.emailInput.addEventListener("keyup", () => {

            if(!Form.emailInput.value.match(Form.regEx) || Form.emailInput.value === "") {
                Form.errorDiv.classList.add("active")
                Form.emailInput.style.border = "2px solid #f96262"

            } else {
                Form.errorDiv.classList.remove("active")
                Form.emailInput.style.border = ""
                Form.messageContainer.innerHTML = ""
            }
        })
    },

    validateFields() {
        const email = Form.emailInput.value
        const verificationOk = Form.regEx.test(email)

        if (email === "" || !verificationOk ) {
            Form.errorWarning()
            throw new Error("Invalid email...")
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
            
            Form.trackWarning()
            Form.validateFields()
            Form.validInput()
            alert("Thanks for subscribing!")

        } catch (error) {
            console.log(error)
        }
    },

}

