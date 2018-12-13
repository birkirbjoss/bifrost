"use strict"
function getData() //CONNECTS THE DATABASE TO THE SITE
{   
    
    fetch("http://tabithabjorkman.com/bifrost_t/json/user_role.php")
    .then(res => res.json())
    .then(PopulateDropDownList);
}

//let selectList = document.getElementById("selectList");


function PopulateDropDownList(roles) {
     //Add the Options to the DropDownList.
     roles.forEach(function(user_role)
     {console.log("fun, fun, fun");
        for (let i = 0; i < user_role.length; i++) {
            
                let option = document.createElement("OPTION");
                option.setAttribute("value", "user_role.user_role_id");
                var textOptions = document.createTextNode("user_role_name");
                option.appendChild(textOptions);
                document.getElementById("selectList").appendChild(option);
            
     }
     })

     
 }

getData();
