
function hello() {
    let menuItems = document.getElementById("menu");
    let flag = document.getElementById("flag")

    if (flag.innerHTML == 1) {
        menuItems.style.display = "contents";
        flag.innerHTML = 2;
    } else {
        menuItems.style.display = "none";
        flag.innerHTML = 1;
    }

}


// function bgMode(){
//     let mode = document.getElementsByClassName("ico-mode")[0]
//     let flag = document.getElementById("mode-flag")
//     let main = document.getElementsByClassName("main")[0]


//     if(flag.innerHTML==1){
//         mode.src = "../media/pics/icons8-moon-and-stars-50.png"
//         mode.style.backgroundColor = "white"

//         main.style.backgroundColor = "white"

//         flag.innerHTML = 2;
//     }else{
//         mode.src = "../media/pics/icons8-sun-48.png"
//         mode.style.backgroundColor = "black"

//         main.style.backgroundColor = "black"

//         flag.innerHTML = 1;
//     }
// }

if (localStorage.bgflag != 1 && localStorage.bgflag != 2) {

    localStorage.bgflag = 1
}

// console.log(localStorage.bgflag)

function bgMode() {
    let mode = document.getElementsByClassName("ico-mode")[0]
    let main = document.getElementsByClassName("main")[0]
    let container = document.querySelector(".main-container")
    let [p1, p2, p3] = document.querySelectorAll(".main-container div p")
    let contactText = document.querySelectorAll(".main-container *")
    let button = document.querySelector("button")
    let birth = document.getElementById("birth")


    if (localStorage.bgflag == 1) {
        mode.src = "../media/pics/icons8-moon-and-stars-50.png"
        mode.style.backgroundColor = "white"

        main.style.backgroundColor = "white"

        container.style.backgroundColor = "rgb(224, 213, 213)"
        container.style.boxShadow = "0px 0px 10px 1px rgb(0,0,0)"

        try {
            p1.style.color = "black"
            p2.style.color = "black"
            p3.style.color = "black"

        } catch (error) {
            console.log(error);
        }

        try {
            for (let i = 0; i <= 7; i++) {
                contactText[i].style.color = "black"
            }


        } catch (error) {
            console.log(error);
        }

        try {
          button.style.backgroundColor = "#2dac2d"


        } catch (error) {
            console.log(error);
        }

        try {
            birth.style.color = "rgb(254, 254, 3)"
  
          } catch (error) {
              console.log(error);
          }

        localStorage.bgflag = 2
    } else {
        mode.src = "../media/pics/icons8-sun-48.png"
        mode.style.backgroundColor = "black"

        main.style.backgroundColor = "black"

        container.style.backgroundColor = "rgb(48, 47, 47)"
        container.style.boxShadow = "0px 0px 10px 1px rgb(255,255,255)"

        try {
            p1.style.color = "white"
            p2.style.color = "white"
            p3.style.color = "white"

        } catch (error) {
            console.log(error);
        }

        try {
            for (let i = 0; i <= 7; i++) {
                contactText[i].style.color = "white"
            }


        } catch (error) {
            console.log(error);
        }

        try {
            button.style.backgroundColor = "#2dac2d"
  
  
          } catch (error) {
              console.log(error);
          }

          try {
            birth.style.color = "rgb(254, 254, 3)"
  
          } catch (error) {
              console.log(error);
          }

        localStorage.bgflag = 1

    }
    console.log(localStorage.bgflag)
}

window.addEventListener("load", () => {
    let mode = document.getElementsByClassName("ico-mode")[0]
    let main = document.getElementsByClassName("main")[0]
    let container = document.querySelector(".main-container")
    let [p1, p2, p3] = document.querySelectorAll(".main-container div p")
    let contactText = document.querySelectorAll(".main-container *")
    let button = document.querySelector("button")
    let birth = document.getElementById("birth")


    if (localStorage.bgflag == 2) {
        mode.src = "../media/pics/icons8-moon-and-stars-50.png"
        mode.style.backgroundColor = "white"

        main.style.backgroundColor = "white"

        container.style.backgroundColor = "rgb(224, 213, 213)"
        container.style.boxShadow = "0px 0px 10px 1px rgb(0,0,0)"
        try {
            p1.style.color = "black"
            p2.style.color = "black"
            p3.style.color = "black"

        } catch (error) {
            console.log(error);
        }

        try {
            for (let i = 0; i <= 7; i++) {
                contactText[i].style.color = "black"
            }


        } catch (error) {
            console.log(error);
        }

        try {
            button.style.backgroundColor = "#2dac2d"
  
  
          } catch (error) {
              console.log(error);
          }

          try {
            birth.style.color = "rgb(254, 254, 3)"
  
          } catch (error) {
              console.log(error);
          }


    } else {
        mode.src = "../media/pics/icons8-sun-48.png"
        mode.style.backgroundColor = "black"

        main.style.backgroundColor = "black"

        container.style.backgroundColor = "rgb(48, 47, 47)"
        container.style.boxShadow = "0px 0px 10px 1px rgb(255,255,255)"

        try {
            p1.style.color = "white"
            p2.style.color = "white"
            p3.style.color = "white"

        } catch (error) {
            console.log(error);
        }

        try {
            for (let i = 0; i <= 7; i++) {
                contactText[i].style.color = "white"
            }


        } catch (error) {
            console.log(error);
        }

        try {
            button.style.backgroundColor = "#2dac2d"
  
  
          } catch (error) {
              console.log(error);
          }

          try {
            birth.style.color = "rgb(254, 254, 3)"
  
          } catch (error) {
              console.log(error);
          }
    }
    console.log(localStorage.bgflag)
})