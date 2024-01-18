

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");


myButton.style.top = "10px"; // Adjust the distance from the top as needed
myButton.style.left = "20%"; // Adjust the horizontal positioning as needed
myButton.style.width = "200px"; // Adjust the width as needed
myButton.style.height = "80px"; // Adjust the height as needed

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

