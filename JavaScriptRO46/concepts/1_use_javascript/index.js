const heading = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  heading.innerText = "This text was modified by JavaScript";
  heading.style.color = "purple";
});
