function salom(){

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });

}

function login(){

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");


    let savedUsername = localStorage.getItem("username");

    let savedPassword = localStorage.getItem("password");


    if(username === "" || password === ""){

        message.innerHTML = "Hamma joyni to'ldiring!";

        message.style.color = "red";

        return;

    }


    if(username === savedUsername && password === savedPassword){

        message.innerHTML = "Xush kelibsiz, " + username + " 🔥";
      
        message.style.color = "green";

       localStorage.setItem("loggedIn", "true");

document.getElementById("userName").innerHTML = username;

document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
});

    }

    else{

        message.innerHTML = "Username yoki parol xato ❌";

        message.style.color = "red";

    }

}



function changeMode(){

    document.body.classList.toggle("light-mode");

    let button = document.querySelector(".mode-btn");


    if(document.body.classList.contains("light-mode")){

        button.innerHTML = "☀️";

    }

    else{

        button.innerHTML = "🌙";

    }

}

function register(){

    let username = document.getElementById("regUsername").value;

    let password = document.getElementById("regPassword").value;

    let message = document.getElementById("registerMessage");


    if(username === "" || password === ""){

        message.innerHTML = "Hamma joyni to'ldiring!";

        message.style.color = "red";

        return;

    }


    localStorage.setItem("username", username);

    localStorage.setItem("password", password);


    message.innerHTML = "Ro'yxatdan o'tdingiz! 🔥";

    message.style.color = "green";

}

function logout(){

    localStorage.removeItem("username");

    localStorage.removeItem("password");

    alert("Siz tizimdan chiqdingiz!");

    location.reload();

}

window.addEventListener("scroll", function(){

    let sections = document.querySelectorAll(".hidden");


    sections.forEach(function(section){

        let sectionTop = section.getBoundingClientRect().top;

        let screenHeight = window.innerHeight;


        if(sectionTop < screenHeight - 100){

            section.classList.add("show");

        }

    });

});

function sendMessage(){

    let name = document.getElementById("contactName").value;

    let email = document.getElementById("contactEmail").value;

    let message = document.getElementById("contactMessage").value;

    let result = document.getElementById("contactResult");


    if(name === "" || email === "" ||  message === ""){

        result.innerHTML = "Iltimos, hamma joyni to'ldiring! ❌";

        result.style.color = "red";

        return;

    }


    result.innerHTML = "Xabaringiz yuborildi! 🔥";

    result.style.color = "green";


    document.getElementById("contactName").value = "";

    document.getElementById("contactEmail").value = "";

    document.getElementById("contactMessage").value = "";

}