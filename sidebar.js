var Sidebar = document.querySelector("nav");
var Toggle = document.getElementsByClassName("toggle");

for (var i = 0; i <= Toggle.length; i++) {
  Toggle[i].addEventListener("click", function () {
    Sidebar.classList.toggle("active");
  });
}