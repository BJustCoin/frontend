function on(elSelector, eventName, selector, fn) {var element = document.querySelector(elSelector);element.addEventListener(eventName, function(event) {var possibleTargets = element.querySelectorAll(selector);var target = event.target;for (var i = 0, l = possibleTargets.length; i < l; i++) {var el = target;var p = possibleTargets[i];while (el && el !== element) {if (el === p) {return fn.call(p, event);}el = el.parentNode;}}});};

function validatePassword(p) {
    var errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.search(/[a-z]/i) < 0) {
        errors.push("Your password must contain at least one letter."); 
    }
    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (errors.length > 0) {
        alert(errors.join("\n"));
        return errors;
    }
    return errors;
}

on('body', 'click', '#logg', function() {
    _this = this;
    form = _this.parentElement.parentElement.parentElement;
    response = form.querySelector(".api_response");
  
    if (!form.querySelector("#id_email").value){
      form.querySelector("#id_email").style.border = "1px #FF0000 solid";
      response.innerHTML = "Input email!";
      response.classList.add("error");
      return
    }
    else if (!form.querySelector("#id_password").value){
      form.querySelector("#id_password").style.border = "1px #FF0000 solid";
      response.innerHTML = "Input password!";
      response.classList.add("error")
      return
    }
    else {
      //_this.disabled = true;
    }
    errors = validatePassword(form.querySelector("#id_password").value);
    if (errors.length > 0) {
      output = "";
      for (var i = 0; i < errors.length; i++){
        output += errors[i];
      };
      response.innerHTML = output;
      return;
    } 
    form_data = new FormData(form);
    object = {};
    form_data.forEach((value, key) => object[key] = value);
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
    
    link.open( 'POST', "/login/", true );
    link.setRequestHeader('Content-Type', 'application/json');
  
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
      status1 = JSON.parse(link.responseText)["status"];
      console.log(status1); 
      if (status1 == "ok!") {
        window.location.href = "/profile/";
      } 
      else {
        response.innerHTML = status1;
      }
    }
    else {
        _this.disabled = false;
        response.style.display = "block";
        response.classList.add("error");
    }};
    link.send(json);
});

on('body', 'click', '#signup', function() {
    _this = this;
    form = _this.parentElement.parentElement.parentElement;
    response = form.querySelector(".api_response");
    if (!form.querySelector("#id_first_name").value){
      form.querySelector("#id_first_name").style.border = "1px #FF0000 solid";
      response.innerHTML = "First name is required!";
      response.classList.add("error");
      return
    } else if (!form.querySelector("#id_last_name").value){
      form.querySelector("#id_last_name").style.border = "1px #FF0000 solid";
      response.innerHTML = "Last name is required!";
      response.classList.add("error");
      return
    } else if (!form.querySelector("#id_password").value){
      form.querySelector("#id_password").style.border = "1px #FF0000 solid";
      response.innerHTML = "Password is required!";
      response.classList.add("error");
      return
    }
    else if (form.querySelector("#id_password").value != form.querySelector("#id_password2").value){
      form.querySelector("#id_password").style.border = "1px #FF0000 solid";
      form.querySelector("#id_password2").style.border = "1px #FF0000 solid";
      response.innerHTML = "Passwords don't match!";
      response.classList.add("error");
      return
    }

    if (!form.querySelector("#id_token").value){
      form.querySelector("#id_token").style.border = "1px #FF0000 solid";
      response.innerHTML = "Verification code is required!";
      response.classList.add("error");
      return
    }
    else {
      form.querySelector("#id_password").style.border = "unset";
      form.querySelector("#id_password2").style.border = "unset";
      form.querySelector("#id_first_name").style.border = "unset";
      form.querySelector("#id_last_name").style.border = "unset";
      form.querySelector("#id_token").style.border = "unset";
      this.disabled = true; 
      response.classList.remove("error");
    }

    first_name = form.querySelector("#id_first_name").value;
    last_name = form.querySelector("#id_last_name").value;

    form.querySelector("#id_first_name").value = first_name.replace(/[^a-zA-Z ]/g, "");
    form.querySelector("#id_last_name").value = last_name.replace(/[^a-zA-Z ]/g, "");

    errors = validatePassword(form.querySelector("#id_password").value);
    if (errors.length > 0) {
      output = "";
      for (var i = 0; i < errors.length; i++){
        output += errors[i];
      };
      response.innerHTML = output;
      response.classList.add("error");
      return;
    }

    form.querySelector("#signup").setAttribute("disabled", "true");
  
    form_data = new FormData(form);
    object = {};
    form_data.forEach((value, key) => object[key] = value);
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
    link.open( 'POST', "/signup/", true );
    link.setRequestHeader('Content-Type', 'application/json');
  
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
        console.log(link.responseText);
        window.location.href = "/profile/";
    }
    else {
        _this.disabled = false;
        response.style.display = "block";
        response.innerHTML = "Error";
        response.classList.add("error");
    }};
    link.send(json);
});

on('body', 'click', '#reset', function() {
    _this = this;
    form = _this.parentElement.parentElement.parentElement;
    response = form.querySelector(".api_response");
    if (!form.querySelector("#id_password").value){
      form.querySelector("#id_password").style.border = "1px #FF0000 solid";
      response.innerHTML = "Password is required!";
      response.classList.add("error");
      return
    }
    else if (!form.querySelector("#id_email").value){
      form.querySelector("#id_email").style.border = "1px #FF0000 solid";
      response.innerHTML = "Email is required!";
      response.classList.add("error");
      return
    }
    else if (form.querySelector("#id_password").value != form.querySelector("#id_password2").value){
      form.querySelector("#id_password").style.border = "1px #FF0000 solid";
      form.querySelector("#id_password2").style.border = "1px #FF0000 solid";
      response.innerHTML = "Passwords don't match!";
      response.classList.add("error");
      return
    }

    if (!form.querySelector("#id_token").value){
      form.querySelector("#id_token").style.border = "1px #FF0000 solid";
      response.innerHTML = "Verification code is required!";
      response.classList.add("error");
      return
    }
    else { 
      form.querySelector("#id_email").style.border = "unset";
      form.querySelector("#id_password").style.border = "unset";
      form.querySelector("#id_password2").style.border = "unset";
      form.querySelector("#id_token").style.border = "unset";
      this.disabled = true; 
      response.classList.remove("error");
    }

    errors = validatePassword(form.querySelector("#id_password").value);
    if (errors.length > 0) {
      output = "";
      for (var i = 0; i < errors.length; i++){
        output += errors[i];
      };
      response.innerHTML = output;
      response.classList.add("error");
      return;
    } 

    form.querySelector("#reset").setAttribute("disabled", "true");
  
    form_data = new FormData(form);
    object = {};
    form_data.forEach((value, key) => object[key] = value);
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
    link.open( 'POST', "/reset/", true );
    link.setRequestHeader('Content-Type', 'application/json');
  
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
        window.location.href = "/profile/";
    }
    else {
        _this.disabled = false;
        response.style.display = "block";
        response.innerHTML = "Error";
        response.classList.add("error");
    }};
    link.send(json);
});

on('body', 'click', '#send_token', function() {
    _this = this;
    if (_this.classList.contains("code2")) {
      url = "/invite_reset/";
    }
    else {
      url = "/invite/";
    }
    form = _this.parentElement.parentElement.parentElement;
    response = form.querySelector(".api_response");
    if (!form.querySelector("#id_email").value){
      form.querySelector("#id_email").style.border = "1px #FF0000 solid";
      response.innerHTML = "Email is required!";
      response.classList.add("error");
      return
    }
    else {
      form.querySelector("#id_email").style.border = "unset";
      this.disabled = true; 
      response.classList.remove("error");
    }

    form.querySelector("#send_token").setAttribute("disabled", "true");

    object = { 
      "name": "", 
      "email": form.querySelector("#id_email").value
    };
    json = JSON.stringify(object);
    link = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject( 'Microsoft.XMLHTTP' );
    link.open( 'POST', url, true );
    link.setRequestHeader('Content-Type', 'application/json');
  
    link.onreadystatechange = function () {
    if ( link.readyState == 4 && link.status == 200 ) {
        console.log(link.responseText);
        form.querySelector("#send_token").remove();
        document.body.querySelector(".action_btn").parentElement.classList.remove("hide");
        response.innerHTML = link.responseText;
    }
    else {
        _this.disabled = false;
        response.style.display = "block";
        //response.innerHTML = "Error";
        //response.classList.add("error");
    }};
    link.send(json);
});

on('body', 'input', '#id_email', function() {
    try {
      send_token = document.body.querySelector("#send_token").parentElement;
      send_token.classList.remove("hide");
      document.body.querySelector("#id_token").parentElement.parentElement.classList.remove("hide");
    } catch { null }
});   