window.onload = function(){
  var login = window.localStorage.getItem("login");
var password = window.localStorage.getItem("password");
console.log(login);
console.log(password);
if(login == null){
        window.location.href = "register.html";
}
else {
        window.location.href = "main.html";
}
};