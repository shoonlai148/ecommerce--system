const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const comfirmpassword=document.getElementById('comfirmpassword');

const createbtn=document.getElementById('create-btn');

createbtn.addEventListener('click',()=>{
    const userData={
        name: name.value,
        email: email.value,
        phone: phone.value,
        password: password.value,
        comfirmpassword: comfirmpassword.value
    };
     localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to login page after registration
    window.location.href = './login.html';

});
