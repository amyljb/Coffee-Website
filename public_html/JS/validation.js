//FUNCTION TO VALIDATE SIGN IN
  function validateSignin() {
      alert("Validating");
      //REGEX TO CHECK EMAIL
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|uk|ie)\b$/;
    //REGEX TO CHECK PASSWORD- LETTERS A-Z UPPER&LOWER, 6-10 CHAR
    var passwordRegex = /^[A-Za-z\d]{6,10}$/;
    //NEW VAR TO GET EMAIL
    var email = document.getElementById("email").value;
    //NEW VAR TO GET PASSWORD
    var password = document.getElementById("password").value;
    
    //IF EMAIL IS EMPTY AND PASSWORD IS NOT
    if(email == "" && password !== ""){
        alert("No email was entered");
        return false;
    }
    //IF PASSWORD FIELD IS EMPTY BUT EMAIL IS NOT
    if(password == "" && email !== ""){
        alert("No password was entered");
        return false;
    }
    //IF BOTH FIELDS ARE EMPTY
    if(email == "" && password == ""){
        alert("No data was entered");
        return false;
    } 
    //IF EMAIL DOESN'T PASS REGEX TEST
    if(!emailRegex.test(email)){
       alert("This email is not valid");
       return false;
   }
   //IF PASSW DOESN'T PASS REGEX TEST
    if (!passwordRegex.test(password)){
       alert("This password is not valid");
       return false;
   }    
   //RETURN TRUE TO MOVE ON TO SIGNED IN PAGE
   return true;
}

//FUNCTION TO VALIDATE FORM
function validateForm() {
    alert("Validating");
    
    var emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|edu|gov|mil|biz|info|mobi|name|aero|asia|jobs|museum|uk|ie)\b$/;
    //VARIABLES TO GET AND STORE USER INPUT
    var email = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;  
    
    //IF ALL FIELDS ARE EMPTY
    if(email=="" && name == "" && phone == "" && message == ""){
        //ALERT NO DATA
        alert("No data was entered");
        //RETURN FALSE
        return false;
    }
    //IF EMAIL FIELD IS EMPTY
    if(email == ""){
        //ALERT NO EMAIL ENTERED
        alert("No email was entered");
        //RETURN FALSE
        return false;
    }
    //IF NAME FIELD IS EMPTY   
    if(name == ""){
        alert("Please enter your name");
        return false;
    }
    //IF PHONE IS EMPTY OR NOT A NUMBER
    if(phone == "" || isNaN(phone)){
        alert("Please enter a valid phone number");
        return false;
    }
    //IF MESSAGE FIELD IS EMPTY
    if(message == ""){
        alert("Don't forget to enter your message");
        return false;
    }
    //IF EMAIL DOES NOT PASS REGEX TEST
    if(!emailRegex.test(email)){
       alert("This email is not valid");
       return false;
    }
    
    return true;
}

