// GENRE SELECT 에 호버시 상어 회전 애니메이션
document.addEventListener("DOMContentLoaded", function() {
    var genreSelect = document.querySelector(".GENRESELECT");
    var sharkImage = document.querySelector("#shark");
    var rotationTimer;

    genreSelect.addEventListener("mouseenter", function() {
      clearInterval(rotationTimer); 
      rotateShark(); 
    });

    genreSelect.addEventListener("mouseleave", function() {
      clearInterval(rotationTimer); 
    });

    function rotateShark() {
      sharkImage.style.transform = "rotateX(720deg)";
      rotationTimer = setInterval(function() {
        sharkImage.style.transform += "rotateX(360deg)"; 
      }, 1000);
    }
  });