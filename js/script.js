
/******************** Scrolling to About page *********************/


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

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
let loginBtn = document.getElementById('loginButton').addEventListener("click", function(){modal.style.display = "block";});

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/* btn.onclick = function() {
  modal.style.display = "block";
} */


function login()
{
  let UserName = document.forms["loginForm"]["userN"].value;
  let Pword = document.forms["loginForm"]["PassW"].value;

  if (UserName == 'CompanyLogin')
  {
      if(Pword == "1234")
      {
        //alert("login successful!");
        window.location.replace("bifrost/company_profile.html");
      }
      else
      {
        alert("Incorrect Username or Password");
      }
  }
  else
  {
    alert("Incorrect Username or Password");
  }
}


  /******************** Modal *********************/
// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let loginBtn = document.getElementById('loginButton').addEventListener("click", function(){modal.style.display = "block";});

// Get the <span> element that closes the modal
let spanClose = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
/* btn.onclick = function() {
  modal.style.display = "block";
} */
let UserName = document.forms["loginForm"]["userN"].value;
let Pword = document.forms["loginForm"]["PassW"].value;

function getUsers(){
    fetch("http://tabithabjorkman.com/bifrost_t/json/login_list.php")
    .then(res => res.json())
    .then(fetchUser);
  } 

function fetchUser(loginData){
  //console.log(loginData);
  loginData.forEach(function (userlogin) {
      //console.log(userlogin);

//let loginMe = document.querySelector('#login').addEventListener("click", function(login){});

      
        if (UserName == userlogin.user_name)
        {
            if(Pword == userlogin.password)
            {
              alert("login successful!");
              loginMe = window.location.href = "http://www.w3schools.com"; //just a test url
            }
            else
            {
              alert("Incorrect Username or Password");
            }
        }
        else
        {
          alert("Incorrect Username or Password");
        }
      
  });
}
getUsers(); 

// When the user clicks on <spanClose> (x), close the modal
spanClose.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


