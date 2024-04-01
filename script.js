// First Name cannot be empty
// Last Name cannot be empty
// Looks like this is not an email
// Password cannot be empty
const btnSubmit = document.getElementById('btn_submit');
const fname = document.getElementById('fname');
const msg_fname = document.getElementById('error_fname');
const lname = document.getElementById('lname');
const msg_lname = document.getElementById('error_lname');
const email = document.getElementById('email');
const msg_email = document.getElementById('error_email');
const password = document.getElementById('password');
const msg_password = document.getElementById('error_password');

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    if(fname.value === '') {
        msg_fname.innerHTML = 'First Name cannot be empty';
        fname.classList.add('error_icon');
    }
    if(lname.value === '') {
        msg_lname.innerHTML = 'Last Name cannot be empty';
        lname.classList.add('error_icon');
    }
    if(email.value === '' || email.value.indexOf('@') < 1) {
        msg_email.innerHTML = 'Looks like this is not an email';
        email.classList.add('error_icon');
    }
    if(password.value === '') {
        msg_password.innerHTML = 'Password cannot be empty';
        password.classList.add('error_icon');
    }
})