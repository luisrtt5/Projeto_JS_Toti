const myForm = event => {
    event.preventDefault()
    const mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const formState =[]
    let $name = document.getElementById("name");
    let $lastName = document.getElementById("lastname");
    let $email = document.getElementById("email");

    /* !name */
   !$name.value ? $name.classList.add('error') : formState.push({element: 'nombre', value: $name.value}) && $name.classList.remove('error') 
   
   !$lastName.value ? $lastName.classList.add('error') : formState.push({element: 'apellido', value: $lastName.value}) && $lastName.classList.remove('error')

   !$email.value || !$email.value.match(mailformat) ? $email.classList.add('error') : formState.push({element: 'email', value: $email.value}) && $email.classList.remove('error')

   if(formState.length === 3) {
    console.log(formState)
   }
 
}