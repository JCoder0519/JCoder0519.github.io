

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my personal website, ${myName}`;
  }

myButton.onclick = () => {
setUserName();
  };


const myImage = document.querySelector("img");

  myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "cjh.png") {
      myImage.setAttribute("src", "cjh2.png");
    } else {
      myImage.setAttribute("src", "cjh.png");
    }
  };

