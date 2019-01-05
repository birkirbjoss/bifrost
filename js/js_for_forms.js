 "use strict"
/*function getDataRoles() //CONNECTS THE DATABASE TO THE SITE
 {   
    
    fetch("http://tabithabjorkman.com/bifrost_t/json/user_role.php")
    .then(res => res.json())
    .then(PopulateDropDownList);
}

let selectList = document.getElementById("selectList");
let RoleOpt = document.createElement("OPTION");

function PopulateDropDownList(roles) {
     //Add the Options to the DropDownList.
     roles.forEach(function(user_role)
     {
         console.log("fun, fun, fun");

        for (let i = 0; i < user_role.length; i++) {
            let userRole = user_role.user_role_name;
            //console.log(userRole.length);
            //let option = document.createElement("OPTION");
            RoleOpt.setAttribute("value", "user_role.length");
            RoleOpt.innerHTML = "user_role.user_role_name";
            //RoleOpt.appendChild(textOptions);
            selectList = appendChild(RoleOpt);
            
        }    
     })
    }

getDataRoles(); */





/*const myHeaders = {
    'Content-Type': 'application/json; charset=utf-8',
    'x-apikey': "5a8152ac16d5526228b42344",
    "cache-control": "no-cache"
};

window.addEventListener("load", () => {
getArticles();
addFormHandler();
addFormSubmitHandler();
});

function addFormSubmitHandler(){
document.querySelector('button[type="submit"]').addEventListener("click", e => {
//console.log(e);
e.preventDefault(); //STOP REFRESHING
let userTitle = document.querySelector('input[name="title"]');
let userDate = document.querySelector('input[name="date"]');
let userContent = document.querySelector('textarea[name="content"]');

//POST STUFF
let data = {
title: userTitle.value,
content:userContent.value,
date:userDate.value,
};

let postData = JSON.stringify(data);
fetch("https://articles-7180.restdb.io/rest/articles", {
method: "post",
headers: myHeaders,
body: postData
})
.then(res=>res.json())
.then(data => {
console.log(data)
//1.hide form
document.querySelector("#modal").style.left="100vw";
showArticle(data);
document.querySelector('input[name="title"]').value="";
document.querySelector('input[name="date"]').value="";
document.querySelector('textarea[name="content"]').value="";
});   


//POST STUFF DONE

})

}

function addFormHandler(){
document.querySelector(".close-modal").addEventListener("click",()=>{
document.querySelector("#modal").style.left="100vw";
})

document.querySelector(".add-new").addEventListener("click",()=>{
document.querySelector("#modal").style.left="0";
})
}

function getArticles() {
fetch("https://articles-7180.restdb.io/rest/articles", {
method: "get",
headers: myHeaders 
})

.then(res => res.json())
.then(data => data.forEach(showArticle))
}

function showArticle(articleData) {
console.log(articleData);
let parent = document.querySelector("main");
let template = document.querySelector("#articleTemplate").content;
let clone = template.cloneNode(true);
clone.querySelector("h1").textContent = articleData.title;
clone.querySelector("p").textContent = articleData.content;
clone.querySelector("article").setAttribute("id", "dynamicid_"+articleData._id)
clone.querySelector(".icons a").addEventListener("click", (eventInfo)=>{
document.querySelector("#dynamicid_"+articleData._id).remove()
//remove element from view
//DELETE stuff
fetch("https://articles-7180.restdb.io/rest/articles/"+articleData._id, {
method: "delete",
headers: myHeaders
})
.then(res =>res.json())
.then(data =>console.log(data));
})

parent.appendChild(clone);
}*/
/*PUT STUFF

let data = {
date: 2018-02-13,

};
let postData = JSON.stringify(data);

fetch("https://articles-7180.restdb.io/rest/articles/_5a8169bf5a8850650001081e, {
method: "put",
headers: {
'Content-Type': 'application/json; charset=utf-8',
'x-apikey': "5a8152ac16d5526228b42344",
"cache-control": "no-cache"
},
body: postData
}).then(d => d.json()).then(data => console.log(data));


//DELETE stuff

fetch("https://articles-7180.restdb.io/rest/articles/5a815f755a88506500010801", {
method: "delete",
headers: {
'Content-Type': 'application/json; charset=utf-8',
'x-apikey': "5a8152ac16d5526228b42344",
"cache-control": "no-cache"
},
})
.then(res=>res.json())
.then(data=>console.log(data));


//POST STUFF
let data = {
title: "JS is awesome",
content: "more yadda, yadda",
};

let postData = JSON.stringify(data);
fetch("https://articles-7180.restdb.io/rest/articles", {
method: "post",
headers: {
'Content-Type': 'application/json; charset=utf-8',
'x-apikey': "5a8152ac16d5526228b42344",
"cache-control": "no-cache"
},

body: postData
})
.then(res=>res.json())
.then(data=>console.log(data));

//ASK FOR STUFF
fetch("https://articles-7180.restdb.io/rest/articles",
{
    methods: "get",
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'x-apikey': "5a8152ac16d5526228b42344",
        "cache-control": "no-cache"
    }
}
)

.then(res=>res.json())
.then(data=>{
console.log(data)
});

*/

