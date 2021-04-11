// Navbar overflow icon
function navOverflow() {
  var x = document.getElementById("myNavigation");
  if (x.className === "navigation shadow") {
    x.className += " responsive";
  } else {
    x.className = "navigation shadow";
  }
}

//Navbar dropdown menu show
function showDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//Most Used list show
function showMostUsed() {
  document.getElementById("myMostUsed").classList.toggle("show");
  document.getElementById("mu-button-id").classList.toggle("button-toggle");
}

//Hiding popups
window.onclick = function(e) {
  console.log("click menu");
  if (!e.target.matches(".dropbtn")) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains("show")) {
      myDropdown.classList.remove("show");
    }
  }
  if (!e.target.matches(".mu-button")) {
    var myMostUsed = document.getElementById("myMostUsed");
    if (myMostUsed.classList.contains("show")) {
      myMostUsed.classList.remove("show");
      document.getElementById("mu-button-id").classList.toggle("button-toggle");
    }
  }
};
