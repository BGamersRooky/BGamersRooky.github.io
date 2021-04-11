let pPath = window.location.pathname;

var posete;

function trafic() {
  if (localStorage.getItem("test")) {
    posete = JSON.parse(localStorage.getItem("test"));    
  } else {
    posete = {
      home: 0,
      cv: 0,
      por: 0,
      bio: 0,
      kon: 0
    };    
  }

  if (pPath === "/index.html") {
    posete.home += 1;    
  } else if (pPath === "/cv.html") {
    posete.cv += 1;
  } else if (pPath === "/portfolio.html") {
    posete.por += 1;
  } else if (pPath === "/biografija.html") {
    posete.bio += 1;
  } else if (pPath === "/kontakt.html") {
    posete.kon += 1;
  }
  console.log(posete);

  localStorage.setItem("test", JSON.stringify(posete));

  var sortable = [];
  for (var stranica in posete) {
    sortable.push([stranica, posete[stranica]]);
  }

  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  console.log(sortable);
  
  for(var i = 0; i < 3; i++){
    console.log(sortable[i][0]);
    link(i);
  }
  function link(i){
    var mu = document.getElementById("myMostUsed");
    if(sortable[i][0] === "home"){
      mu.innerHTML += "<a href=\"index.html\">Početna</a>" + " (" + sortable[i][1] + ")<br>";     
      return;
    }else if(sortable[i][0] === "cv"){
      mu.innerHTML += "<a href=\"cv.html\">CV</a>" + " (" + sortable[i][1] + ")<br>";
      return;
    }else if(sortable[i][0] === "por"){
      mu.innerHTML += "<a href=\"portfolio.html\">Portfolio</a>" + " (" + sortable[i][1] + ")<br>";
      return;
    }else if(sortable[i][0] === "bio"){
      mu.innerHTML += "<a href=\"biografija.html\">Biografija</a>" + " (" + sortable[i][1] + ")<br>";
      return;
    }else if(sortable[i][0] === "kon"){
      mu.innerHTML += "<a href=\"kontakt.html\">Kontakt</a>" + " (" + sortable[i][1] + ")<br>";
      return;
    }
  }
}


//localStorage.clear();