const myButton = document.querySelector("button");
console.log(myButton);

myButton.textContent = "Click me please";

myButton.addEventListener("click", function () {
  console.log("button clicked");
});

const myHeader = document.querySelector("h1");

myHeader.addEventListener("mouseover", function (event) {
  console.log(event);
});
