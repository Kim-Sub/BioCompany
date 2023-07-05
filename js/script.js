// ★ 섹션 1
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

  
// ★ 섹션 2
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
    var introduce = document.getElementById('introduce');
    var scrollPosition = window.scrollY; 

    if (scrollPosition >= 1600) {
      introduce.style.opacity = 1; 
    } else {
      introduce.style.opacity = 0; 
    }
  });



// page-down 버튼 누르면 섹션3 등장
const pageDown = document.querySelector('.page-down');
const section3 = document.getElementById('section3');

pageDown.addEventListener('click', function() {
  section3.style.display = 'block';
  section3.scrollIntoView({ behavior: 'smooth' });
});


// ★ 섹션3
// 비디오 종료시 비디오 display:none + 컨텐츠 박스 확대
var videoBox = document.querySelector('#section3 .videoBox');
var video = videoBox.querySelector('.videoPlayer');
const cover = document.querySelector('.cover');

function handleVideoEnd() {
    videoBox.classList.add('hidden');
    videoBox.style.display = 'none';
    setTimeout(function() {
      cover.classList.add('add')
    }, 10); 
}
video.addEventListener('ended', handleVideoEnd);



// 컨텐츠 박스 here 호버시 derma이미지 등장
const imgboxP = document.querySelector('.imgbox p'); // 호버 활성화 버튼

const imgboxh2 = document.querySelector('.imgbox h2');
const imgboxh4 = document.querySelector('.imgbox h4');
const imgboxImg = document.querySelector('.imgbox img');

imgboxP.addEventListener('mouseover', function() {
  imgboxP.style.display = 'none'
  imgboxImg.style.top = '50%'
  imgboxImg.style.left = '10%'
  imgboxImg.style.opacity = '1'

  imgboxh2.style.top = '25%'
  imgboxh2.style.left = '30%'
  imgboxh2.style.opacity = '1'

  imgboxh4.style.top = '40%'
  imgboxh4.style.left = '35%'
  imgboxh4.style.opacity = '1'
});