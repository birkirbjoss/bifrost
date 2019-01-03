"use strict"

/**************** approve terms and conditions ***********************/
//let checkedTandC = document.querySelector('#sign_up').checked;

document.addEventListener('click', function(){
    document.querySelector('#CheckTandC').checked;
    console.log('approved');
})

// get password field and check it against the confirm field

let password = document.getElementById("sign_up_password"), confirm_password = document.getElementById("sign_up_confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords don't match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

/******************** Scrolling to About page *********************/
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".open").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "#section2") {
      // Prevent default anchor click behavior
      event.preventDefault();
      

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
    // End if
    if (this.hash !== "#section3") {
      // Prevent default anchor click behavior
      event.preventDefault();
      

      // Store hash
      let hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 600, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } 
  });
});


  /******************** Modal *********************/
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let loginBtn = document.getElementById('loginButton');

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
  modal.style.display = "block"; 
} 

// When the user clicks on <spanClose> (x), close the modal
/* spanClose.onclick = function() {
  modal.style.display = "none";
} */
spanClose.addEventListener('click', function () {
  modal.style.display = "none";
  });

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//preventing page from refreshing
document.querySelector('#LoginForm').addEventListener('submit', function(e){
  e.preventDefault();
  getUsers();
});
//targeting the info from the input fields
document.querySelector('#userName').addEventListener('input', function(e){
  
  UserName = e.target.value;
  //console.log(e.target.value)
});
//targeting the info from the input fields
document.querySelector('#password').addEventListener('input', function(e){
  
  Pword = e.target.value;
  //console.log(e.target.value)
});

let UserName = '';
let Pword = '';

//fetching data from login table
function getUsers(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/login_list.php")
    .then(res => res.json())
    .then(fetchUser);
  } 

//fetching array
function fetchUser(loginData){
  console.log(loginData);
let checkInfo;
//rotating through the array with forEach
  loginData.forEach(function (userlogin) {
      
      let studentProfilePage = "http://127.0.0.1:5500/bifrost/student_profile.html";
      let CompanyProfilePage = "http://127.0.0.1:5500/bifrost/company_profile.html";
      UserName = document.querySelector('#userName').value;  
      Pword = document.querySelector('#password').value; 
      let user_id = userlogin.login_id;
      //if UN and PW don't match go home
      if(UserName != userlogin.user_email && Pword != userlogin.password)
      {
        //console.log('home');
        checkInfo = 0;
        //window.location.href = 'http://127.0.0.1:5500/bifrost/home.html';
      }
      //if UN and PW match go to respective pages
      else if(UserName == userlogin.user_email && Pword == userlogin.password)
      {
        //console.log('next page');
        
          // if (user_id = Company_user = Username = Pword)
        if(userlogin.user_role_id == 1)
        {
          //console.log('company :logged in');
          checkInfo = 1;
          window.location.href = CompanyProfilePage + user_id;
        }
        else if(userlogin.user_role_id == 2)
        {
          //console.log('student log in');
          checkInfo = 2;
          window.location.href = studentProfilePage + user_id;
        }
      } 
  });
  if(checkInfo = 0)
  {
    window.location.href = 'http://127.0.0.1:5500/bifrost/home.html';
  }
}
// calls the submit button and makes the login work()
let submit = document.getElementsByName('Login');
submit.addEventListener("click", getUsers()); 



