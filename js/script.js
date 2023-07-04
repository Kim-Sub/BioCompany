// 섹션 1
// 550 스크롤 도착시 메인1 동영상 페이드
window.addEventListener('scroll', function() {
    var videoContainer = document.querySelector('.m-video');
    var mainVideo = document.getElementById('mainVideo');
    var scrollY = window.scrollY

    if (scrollY >= 550) {
      mainVideo.classList.add('dark-video');
    } else {
      mainVideo.classList.remove('dark-video');
    }
  });


// 섹션 2
// 마우스 호버시 동영상 보이게
const introduceDivs = document.querySelectorAll("#introduce > div");

introduceDivs.forEach((div) => {
  const video = div.querySelector("video");

  div.addEventListener("mouseenter", () => {
    video.classList.add("active");
  });

  div.addEventListener("mouseleave", () => {
    video.classList.remove("active");
  });
});


// 1000 스크롤 도착시 섹션2 네비 메뉴 고정
$(window).scroll(function() {
    if ($(window).scrollTop() >= 1000) {
      $('.header-logoNav').addClass('sticky-fixed');
    } else {
      $('.header-logoNav').removeClass('sticky-fixed');
    }
  });


// 1500 스크롤 도착시 #introduce opacity 변경
window.addEventListener('scroll', function() {
    var introduce = document.getElementById('introduce'); // introduce 요소 선택
    var scrollPosition = window.scrollY; // 스크롤 위치 확인

    if (scrollPosition >= 1600) {
      introduce.style.opacity = 1; // opacity 값 변경
    } else {
      introduce.style.opacity = 0; // 기본 opacity 값으로 설정
    }
  });
