


var coll = document.getElementsByClassName("collapsible");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  function myFunction() {
    location.replace("https://micaela1996.github.io/")
  }

  function myFunction2() {
    location.replace("https://github.com/Micaela1998/Micaela1998.github.io/blob/main/dibujosportfolionoahcastro.html")
  }

  function myFunction3() {
    location.replace("https://github.com/Micaela1998/Micaela1998.github.io/blob/main/fotosnoahcastro.html")
  }


