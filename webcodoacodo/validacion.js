const nombre = document.getElementById("name")
const nombre = document.getElementById("lastname")
const nombre = document.getElementById("mail")
const nombre = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("sumbit", e=>{
    e.preventDefault()
    let warnings = ""
    let validacionemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (nombre.value.length <2){
        warnings = `El nombre no es válido <br>`
    }

    if (apellido.value.length <2){
        warnings = `El apellido no es válido <br>`
    }

    console.log(validacionemail.test(email.value)
    if (!validacionemail.test(email.value)){
        warnings = `El email no es válido <br>`

    }

    
})