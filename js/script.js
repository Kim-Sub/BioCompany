// 현재 스크롤 높이를 알 수 있는 console
window.addEventListener('scroll', function() {
  console.log(window.scrollY);
});

// ★ 섹션 1
// 550 스크롤 도착시 메인1 동영상 페이드
// 각각 스크롤 도착시 textbox1, textbox2, textbox3 등장
window.addEventListener('scroll', function() {
    var mainVideo = document.getElementById('mainVideo');

    var section3 = document.getElementById('section3');
    var scrollY = window.scrollY ;
    var textbox1 = document.querySelector('.textbox1');
    var textbox2 = document.querySelector('.textbox2');
    var textbox3 = document.querySelector('.textbox3');

    if (scrollY >= 550) {
      mainVideo.classList.add('dark-video');
    } else {
      mainVideo.classList.remove('dark-video');
    }
    if (scrollY >= 3570) {
      section3.classList.add('dark');
    } else {
      section3.classList.remove('dark');
    }


    if (scrollY >= 500) { // OUR PASSION
      textbox1.style.left = '15%';
    }
    if (scrollY >= 1400) { // WE  ARE  NBBIO
      textbox2.style.right = '18%';
    }
    if (scrollY >= 3880) { // Pure Genetic Crude
      textbox3.style.left = '15%';
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


// ★ 섹션 3
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
const imgbox = document.querySelector('.imgbox1'); 
const imgboxP = document.querySelector('.imgbox p'); // 호버 활성화 버튼

const imgboxh2 = document.querySelector('.imgbox h2');
const imgboxh4 = document.querySelector('.imgbox h4');
const imgboxImg = document.querySelector('.imgbox img');

imgboxP.addEventListener('mouseover', function() {
  imgbox.style.border = '1px solid white'
  imgboxP.style.display = 'none'

  imgboxImg.style.top = '50%'
  imgboxImg.style.left = '0%'
  imgboxImg.style.opacity = '1'

  imgboxh2.style.top = '12%'
  imgboxh2.style.left = '37%'
  imgboxh2.style.opacity = '1'

  imgboxh4.style.top = '36%'
  imgboxh4.style.left = '47%'
  imgboxh4.style.opacity = '1'
});

// 컨텐츠 박스 derma - 2번째
const derma1span = document.querySelector('.imgbox1 span'); // 클릭 버튼
const imgbox2 = document.querySelector('.imgbox2');

const imgbox2h2 = document.querySelector('.imgbox2 h2');
const imgbox2h4 = document.querySelector('.imgbox2 h4');
const imgbox2Img = document.querySelector('.imgbox2 img');

derma1span.addEventListener('click', function() {
  imgbox.style.opacity = '.1'

  imgbox2.style.border = '1px solid white'
  imgbox2.style.top = '-8%'
  imgbox2.style.left = '22%'
  imgbox2.style.opacity = '1'

  imgbox2Img.style.top = '50%'
  imgbox2Img.style.left = '0%'
  imgbox2Img.style.opacity = '1'

  imgbox2h2.style.top = '12%'
  imgbox2h2.style.left = '37%'
  imgbox2h2.style.opacity = '1'

  imgbox2h4.style.top = '49%'
  imgbox2h4.style.left = '47%'
  imgbox2h4.style.opacity = '1'
});


// 컨텐츠 박스 derma - 3번째
const derma2span = document.querySelector('.imgbox2 span'); // 클릭 버튼
const imgbox3 = document.querySelector('.imgbox3');

const imgbox3h2 = document.querySelector('.imgbox3 h2');
const imgbox3h4 = document.querySelector('.imgbox3 h4');
const imgbox3Img = document.querySelector('.imgbox3 img');

derma2span.addEventListener('click', function() {
  imgbox2.style.opacity = '.1'

  imgbox3.style.border = '1px solid white'
  imgbox3.style.top = '-75%'
  imgbox3.style.left = '38%'
  imgbox3.style.opacity = '1'

  imgbox3Img.style.top = '50%'
  imgbox3Img.style.left = '0%'
  imgbox3Img.style.opacity = '1'

  imgbox3h2.style.top = '12%'
  imgbox3h2.style.left = '37%'
  imgbox3h2.style.opacity = '1'

  imgbox3h4.style.top = '49%'
  imgbox3h4.style.left = '47%'
  imgbox3h4.style.opacity = '1'
});


// nextPage 버튼 누르면 섹션4 + footer 등장
const nextPage = document.querySelector('.nextPage');
const section4 = document.getElementById('section4');
const footer = document.getElementById('footer');

nextPage.addEventListener('click', function() {
  section4.style.display = 'block';
  footer.style.display = 'block'
  section4.scrollIntoView({ behavior: 'smooth' });
});


// ★ 섹션 4
// 이벤트 높이 3600 픽셀
window.addEventListener('scroll', function() {
  var scrollY = window.scrollY ;
  var sidePhoto = document.querySelector('.sidePhoto');
  var slider = document.querySelector('.slider');

  if (scrollY >= 3450) {  // 사이드 사진 
    sidePhoto.style.top = '50%';
  }
  if (scrollY >= 3750) {  //  WEEKLY PRODUCT 슬라이더
    slider.style.right = '-61%'
  }

});

// WEEKLY PRODUCT 슬라이더
