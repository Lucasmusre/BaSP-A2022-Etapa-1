window.onload = function(){
var form = document.getElementById("logInForm");
var label = document.getElementsByTagName("label");
var email = document.getElementById("logInMail");
var password = document.getElementById("logInPassword");
var sumbit = document.getElementById("sumbit-b");
var errorEmail = document.createElement('p');
var errorPassword = document.createElement('p');
var errorlog = document.getElementById("errorLog")
var errorPass = document.getElementById("errorPass")

email.onblur = function (){
    checkEmail ();
}
password.onblur = function (){
    checkPassword();
}

email.onfocus = function (){
    email.classList.remove("green-border","red-border");
    errorEmail.remove();
    errorlog.classList.remove("visible");
}
password.onfocus = function (){
    password.classList.remove("green-border","red-border");
    errorPassword.remove();
    errorPass.classList.remove("visible");
}
sumbit.onclick = function (e){
    e.preventDefault();
    if (!checkEmail()){
        alert("The email has an error.Fix your mistake");
    errorlog.classList.add("visible")
        return false; 
    }
    if(!checkPassword()){
        alert("The password has an error.Fix your mistake");
        errorPass.classList.add("visible")
        return false;
        
    }
    else{
        alert("Email: " + email.value + "\nPassword: " + password.value);
        return true;
    }
}

//------------------------------------------------------------------------
function checkEmail (){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,18}$/;
    if (email.value.length==0){
        email.classList.add("red-border");
        return false;
    }
    if (!emailExpression.test(email.value)){
        email.classList.add("red-border");
        errorEmail.textContent = "Wrong format of the email, Fix your mistake.";
        errorEmail.classList.add("error-text");
        form.insertBefore(errorEmail, label[1]);
        return false;
    }
    else{
        email.classList.add("green-border");
        return true;
    }
}

function checkPassword(){
    if (!password.value.length){
        password.classList.add("red-border");
        return false;
    }
    else {
        for ( i=0;i<password.value.length;i++){
            if (password.value[i] < '0' || password.value[i] > 'z' ||
            (password.value[i] > '9' && password.value[i] < 'A') ||
            (password.value[i] > 'Z' && password.value[i] < 'a')){
                password.classList.add("red-border");
                errorPassword.textContent = "Wrong format of the password, Fix your mistake.";
                errorPassword.classList.add("error-text");
                form.insertBefore(errorPassword, sumbit);
                return false;
            }
        }
    }
    password.classList.add("green-border");
    return true;
}
}