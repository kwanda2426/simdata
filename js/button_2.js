function myFunction_1() {
    var dots = document.getElementById("dots_1");
    var moreText = document.getElementById("more_1");
    var btnText = document.getElementById("myBtn_1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }