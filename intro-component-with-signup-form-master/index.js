if (window.innerWidth < 800) {
  document.body.style.background = './images/bg-intro-mobile.png';
}


const form = document.querySelector('.myForm')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')

form.addEventListener('submit', e => {
  e.preventDefault()

  validateInputs()
})

const setError = (element, message) => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')
  const image = inputControl.querySelector('.image')

  image.style.display = 'block'
  errorDisplay.innerText = message
  inputControl.classList.add('error')
  inputControl.classList.remove('success')

}

const setSuccess = element => {
  const inputControl = element.parentElement
  const errorDisplay = inputControl.querySelector('.error')
  const image = inputControl.querySelector('.image')

  image.style.display = 'none'
  errorDisplay.innerText = ''
  inputControl.classList.add('success')
  inputControl.classList.remove('error')
}

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
  const firstNameValue = firstName.value.trim()
  const lastNameValue = lastName.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if(firstNameValue === ''){
    setError(firstName, 'First Name can not be empty')
  } else{
    setSuccess(firstName)
  }

  if(lastNameValue === ''){
    setError(lastName, 'Last Name can not be empty')
  } else{
    setSuccess(lastName)
  }

  if(emailValue === ''){
    setError(email, 'Looks like this is not an email')
  } else if(!isValidEmail(emailValue)){
    setError(email, 'Provide a valid email address')
  } else{
    setSuccess(email)
  }

  if(passwordValue === ''){
    setError(password, 'Password can not be empty')
  } else if(passwordValue.length < 8){
    setError(password, 'Password must be at least 8 characters')
  } else{
     setSuccess(password)
  }
}