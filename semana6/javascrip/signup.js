window.onload = function () {
  var form = document.getElementById("signUp-form");
  var name = document.getElementById("inputname");
  var lastname = document.getElementById("inputlastname");
  var dni = document.getElementById("inputdni");
  var date = document.getElementById("inputdata");
  var phone = document.getElementById("inputphone");
  var address = document.getElementById("inputaddress");
  var location = document.getElementById("inputlocation");
  var postalcode = document.getElementById("inputcode");
  var email = document.getElementById("inputemail");
  var password = document.getElementById("inputpassword");
  var repeatpassword = document.getElementById("inputrepeatpass");
  var sumbit = document.getElementById("sumbitB");
  var errorName = document.createElement("p");
  var errorLastname = document.createElement("p");
  var errorDni = document.createElement("p");
  var errorDate = document.createElement("p");
  var errorPhone = document.createElement("p");
  var errorAddress = document.createElement("p");
  var errorLocation = document.createElement("p");
  var errorPostalCode = document.createElement("p");
  var errorEmail = document.createElement("p");
  var errorPass = document.createElement("p");
  var errorPassRepeat = document.createElement("p");
  var errorcomplete = document.getElementById("errorcomplete1");
  var labelphone = document.getElementById("labelphone");
  var formsigup = document.getElementById("singUpform1");
  var formsigup2 = document.getElementById("singUpform2");
  var errorcomplete2 = document.getElementById("errorcomplete2");
  var errorcomplete3 = document.getElementById("errorcomplete3");
  var formsigup3 = document.getElementById("singUpform3");
  var formsigup4 = document.getElementById("singUpform4");
  var errorcomplete4 = document.getElementById("errorcomplete4");
  var errorcomplete5 = document.getElementById("errorcomplete5");
  var formsigup5 = document.getElementById("singUpform5");
  var formsigup6 = document.getElementById("singUpform6");
  var errorcomplete6 = document.getElementById("errorcomplete6");
  var errorcomplete7 = document.getElementById("errorcomplete7")
  var formsigup7= document.getElementById("singUpform7")
  function Dateall(date) {
    var day = date.slice(8);
    var month = date.slice(5, 7);
    var year = date.slice(0, 4);
    return day + "/" + month + "/" + year;
  }
  name.onblur = function () {
    checkName();
  };
  name.onfocus = function () {
    name.classList.remove("green-border", "red-border");
    errorName.remove();
    errorcomplete.remove();
  };

  ////////////////////////////////////////////
  sumbit.onclick = function (e) {
    e.preventDefault();
    if (!checkName()) {
      alert("Fix your name");
      return false;
    }
    if (!checklastname()) {
      alert("Fix your Lastname");
      return false;
    }
    if (!checkdni()) {
      alert("Fix your DNI");
      return false;
    }
    if (!checkdate()) {
      alert("Fix your date");
      return false;
    }
    if (!checkphone()) {
      alert("Fix your Phone");
      return false;
    } else {
      alert(
        "Name: " +
          name.value +
          "Lastname: " +
          lastname.value +
          "DNI: " +
          dni.value +
          "date" +
          date.value +
          "phone" +
          phone.value
      );
      return true;
    }
  };
  //////////////////////////////////////////////////////////////////////////
  function checkName() {
    var checkName = /[a-zA-Z]{3,}$/;
    if (name.value.length == 0) {
      name.classList.add("red-border");
      formsigup.insertBefore(errorcomplete, name);
      return false;
    }
    if (!checkName.test(name.value)) {
      name.classList.add("red-border");
      errorName.textContent = "Fix your name.";
      formsigup.insertBefore(errorName, name);
      return false;
    } else {
      name.classList.add("green-border");
      return true;
    }
  }
  ///////////////////////////////////////////////////////////////////////
  lastname.onblur = function () {
    checklastname();
  };
  lastname.onfocus = function () {
    lastname.classList.remove("green-border", "red-border");
    errorLastname.remove();
    errorcomplete2.remove();
  };

  function checklastname() {
    var checklastname = /[a-zA-Z]{3,}$/;
    if (lastname.value.length == 0) {
      lastname.classList.add("red-border");
      formsigup2.insertBefore(errorcomplete2, lastname);
      return false;
    }
    if (!checklastname.test(lastname.value)) {
      lastname.classList.add("red-border");
      errorLastname.textContent = "Fix your lastname.";
      formsigup2.insertBefore(errorLastname, lastname);
      return false;
    } else {
      lastname.classList.add("green-border");
      return true;
    }
  }
  //////////////////////////////////////////////////////////////
  dni.onblur = function () {
    checkdni();
  };
  dni.onfocus = function () {
    dni.classList.remove("green-border", "red-border");
    errorDni.remove();
    errorcomplete3.remove();
  };
  function checkdni() {
    var checkdni = /[0-9]{7,}$/;
    if (dni.value.length == 0) {
      dni.classList.add("red-border");
      formsigup3.insertBefore(errorcomplete3, dni);
      return false;
    }
    if (!checkdni.test(dni.value)) {
      dni.classList.add("red-border");
      errorDni.textContent = "Fix your dni.";
      formsigup3.insertBefore(errorDni, dni);
      return false;
    } else {
      dni.classList.add("green-border");
      return true;
    }
  }
  //////////////////////////////////////////////
  date.onblur = function () {
    checkdate();
  };
  date.onfocus = function () {
    date.classList.remove("green-border", "red-border");
    errorDate.remove();
    errorcomplete.remove();
  };
  function checkdate() {
    var years = date.value.slice(0, 4);
    var actualYears = new Date().getFullYear();
    if (years == "") {
      date.classList.add("red-border");
      return false;
    }
    if (actualYears - years < 18) {
      date.classList.add("red-border");
      errorDate.textContent = "need 18 years old";
      formsigup4.insertBefore(errorcomplete4, date);
      errorDate.classList.add("error-text");
      return false;
    }
    date.classList.add("green-border");
    return true;
  }
  ///////////////////////////////
  phone.onblur = function () {
    checkphone();
  };
  phone.onfocus = function () {
    phone.classList.remove("green-border", "red-border");
    errorPhone.remove();
    errorcomplete.remove();
  };
  function checkphone() {
    var checkphone = /[0-9]{1,10}$/;
    if (phone.value.length == 0 || phone.value.length != 10) {
      phone.classList.add("red-border");
      return false;
    }
    if (!checkphone.test(phone.value)) {
      phone.classList.add("red-border");
      errorPhone.textContent = "Fix your number Phone.";
      formsigup5.insertBefore(errorcomplete5, phone);
      return false;
    } else {
      phone.classList.add("green-border");
      return true;
    }
  }
  //////////////////////////////////////////
  address.onblur = function () {
    checkaddress();
  }
  address.onfocus = function () {
    address.classList.remove("green-border", "red-border");
    errorAddress.remove();
    errorcomplete.remove();
  };
  function checkaddress(){
    if (address.value.length == 0) {
      address.classList.add("red-border");
      return false;
    }
    if (address.value ||
      address.value.length < 5 ||
      address.value.indexOf(" ") == -1
    ) {
      address.classList.add("red-border");
      errorAddress.textContent = "The Address is wrong";
      errorAddress.classList.add("error-text");
      formsigup6.insertBefore (errorAddress, address);
      return false;
    }
    address.classList.add("green-border");
    return true;
  }
  ////////////////////////////////////////////
  location.onblur = function () {
    checklocation();
  }
  location.onfocus = function () {
    location.classList.remove("green-border", "red-border");
    errorLocation.remove();
    errorcomplete.remove();
  function checklocation() {
    if (location.value.length == 0) {
      location.classList.add("red-border");
      return false;
    }
    if ((location.value) ||
      location.value.length < 3) 
      {location.classList.add("red-border");
      errorLocation.textContent ="The Location is wrong.";
      errorLocation.classList.add("error-text");
      formsigup7.insertBefore(errorcomplete6, address)
      return false;
    }
    location.classList.add("green-border");
    return true;
  }
}
}
