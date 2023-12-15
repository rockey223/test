// $(window).onload(function() {
//     document.querySelector(".blue-top-circle").classList.add("first-circle");
//     document.querySelector(".blue-bottom-circle").classList.add("second-circle");
//     document.querySelector(".orange-circle").classList.add("third-circle");
// });

// window.onload = function() {
//     document.querySelector(".blue-top-circle").className = "first-circle";
//     document.querySelector(".blue-bottom-circle").className = "second-circle";
//     document.querySelector(".orange-circle").className = "third-circle";
// };


// document.addEventListener("DOMContentLoaded", function(){
//     document.querySelector(".blue-top-circle").classList.add("first-circle");
//     document.querySelector(".blue-bottom-circle").classList.add("second-circle");
//     document.querySelector(".orange-circle").classList.add("third-circle");
// });


// https://stackoverflow.com/questions/1435015/how-can-i-make-the-browser-wait-to-display-the-page-until-its-fully-loaded
// $(document).ready(function() {
//     $('#Syvar_Tech_Logo').show();
    // $('#msg').hide();
// });
// var logo_clicked = false;

// document.querySelector("#Syvar_Tech_Logo").addEventListener("click", function(){
setTimeout(function(){
    document.querySelector(".Syvar_Hover").classList.add("logo_animation1");
    document.querySelector(".hidden-top-left").classList.add("logo_animation2");
    document.querySelector(".hidden-top-right").classList.add("logo_animation3");
    document.querySelector(".hidden-mid-orange-left").classList.add("logo_animation4");
    document.querySelector(".hidden-mid-orange-right").classList.add("logo_animation5");
    document.querySelector(".hidden-orange-diagonal").classList.add("logo_animation6");
    document.querySelector(".hidden-first-circle").classList.add("logo_animation7");
    document.querySelector(".hidden-second-circle").classList.add("logo_animation8");
    document.querySelector(".hidden-third-circle").classList.add("logo_animation9");
    document.querySelector(".hidden-blue-diagonal-top").classList.add("logo_animation10");
    document.querySelector(".hidden-blue-diagonal-bottom").classList.add("logo_animation11");
    document.querySelector(".hidden-blue-mid-right").classList.add("logo_animation12");
    document.querySelector(".hidden-blue-mid-left").classList.add("logo_animation13");
    document.querySelector(".hidden-blue-bottom-right").classList.add("logo_animation14");
    document.querySelector(".hidden-blue-bottom-left").classList.add("logo_animation15");
},1900);

setTimeout(function(){
    document.querySelector(".Syvar_Logo").classList.add("Click_Logo");
    document.querySelector("body").classList.add("body-color");
    // document.querySelector(".intro-msg").classList.add("intro-msg-appear");
    // for (var i = 0; i < document.querySelectorAll(".intro-msg").length; i++){
    //     setTimeout(function(){
    //         document.querySelectorAll(".intro-msg")[i].classList.add("intro-msg-appear");            
    //     },100);
    // }
    for (var i = 1; i < 6; i++) {
        document.querySelector(".Syvar_Text path:nth-child("+i+")").classList.add("letter-"+i);
    }

    setTimeout(function(){
        for (var i = 1; i < 11; i++) {
            document.querySelector(".Coming_Soon_Unused path:nth-child("+i+")").classList.add("coming-soon-"+i);
        }
    },700);

    setTimeout(function(){
        document.querySelector(".second-ball").classList.add("second-ball-animation");
        document.querySelector(".single-line-unused").classList.add("single-line-animation");
        document.querySelector(".Coming_Soon_Unused").classList.add("Coming_Soon");
        document.querySelector(".ball-background-unused").classList.add("ball-background");
        document.querySelector(".ball-roll-unused").classList.add("ball-roll");
        document.querySelector(".ball-roll").classList.add("rolling-ball");
    },700);

    setTimeout(function(){
        document.querySelector("#Syvar_Tech_Logo").classList.add("Remove_Logo");
    },1000);
    // setTimeout(function(){
    //     document.querySelector(".intro-msg").classList.add("Remove_Logo");
    // },1000);
    // logo_clicked = true;
},2500);
// });

// Animation on Mouse Move ----------------- start ---------------------

// document.onmousemove = animatedCircles;

// if (logo_clicked===true){
//     var colors = ['#ccc', '#6cf', '#eba13a'];
//     // var colors = ['#13D70D', '#13D70D', '#13D70D']
// }
// else {
//     var colors = ['#1061CD', '#D7970D'];
// }

// function animatedCircles(event) {
//     let circle = document.createElement('div');
//     circle.setAttribute('class', 'mouse-circle');
//     document.body.appendChild(circle);

//     circle.style.left = String(Number(event.clientX) + Number(Math.floor(Math.random() * 100)/3)) + 'px';
//     circle.style.top = String(Number(event.clientY) + Number(Math.floor(Math.random() * 100)/3)) + 'px';

//     let color = colors[Math.floor(Math.random() * colors.length)];
//     circle.style.borderColor = color;

//     circle.style.transition = 'all 0.5s linear 0s';

//     circle.style.left = circle.offsetLeft - 20 + 'px';
//     circle.style.top = circle.offsetTop - 20 + 'px';

//     circle.style.width = '50px';
//     circle.style.height = '50px';
//     circle.style.borderWidth = '5px';
//     circle.style.opacity = 0;
// }

// Animation on mouse move -------------------- end -----------------------

// Cursor Follower
// document.addEventListener("mousemove",function (event){
//     document.querySelector(".cursor").style.top = event.pageY + "px";
//     document.querySelector(".cursor").style.left = event.pageX + "px";
// });

// const logo = document.querySelectorAll(".Syvar_Text > path");

// for (var i = 0; i < logo.length; i++) {
//     console.log("Letter " + i + " is " + logo[i].getTotalLength());
// }

// const logo = document.querySelectorAll(".Coming_Soon > path");

// for (var i = 0; i < logo.length; i++) {
//     console.log("Letter " + i + " is " + logo[i].getTotalLength());
// }




// Fleur De Leah
// Scheherazade New
// #5c5360

// Chakra Petch
// Cinzel Decorative
// Kulim Park
// Kumbh Sans
// Tourney
//Varela Round
//Nunito