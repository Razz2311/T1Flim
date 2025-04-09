var swiper = new Swiper(".popuplar-content", {
    slidesPerView:1,
    spaceBetween: 10,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
      280:{
        slidesPerView:1,
        spaceBetween: 10,
      },
      320:{
        slidesPerView:2,
        spaceBetween: 10,
      },
      510:{
        slidesPerView:2,
        spaceBetween: 10,
      },
      758:{
        slidesPerView:3,
        spaceBetween: 15,
      },
      900:{
        slidesPerView:4,
        spaceBetween: 20,
      }
    }
  });

  //phát video
  let playButton = document.querySelector(".play-movie");
  let video = document.querySelector(".video-container");
  let myvideo = document.querySelector("#myvideo");
  let closebtn = document.querySelector(".close-video");

  playButton.onclick =() =>{
    video.classList.add("show-video")
    //auto play
    myvideo.play();
  };

  closebtn.onclick =() =>{
    video.classList.remove("show-video")
    myvideo.pause();
  }
  // Phát video với error handling
playButton.onclick = () => {
  video.classList.add("show-video");
  myvideo.play().catch(error => {
      console.error("Lỗi khi phát video:", error);
      alert("Không thể phát video. Vui lòng thử lại.");
  });
};

// Thêm sự kiện bàn phím
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape" && video.classList.contains("show-video")) {
      video.classList.remove("show-video");
      myvideo.pause();
  }
});

// Event delegation cho các nút play
document.addEventListener('click', (e) => {
  if (e.target.closest('.play-btn')) {
      const movieTitle = e.target.closest('.movie-box').querySelector('.movie-title').textContent;
      console.log(`Bắt đầu phim: ${movieTitle}`);
      // Thêm logic phát video tại đây
  }
});

document.getElementById('search-btn').addEventListener('click', function() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const allMovieTitles = document.querySelectorAll('.movie-title');
  
  allMovieTitles.forEach(title => {
      const movieBox = title.closest('.movie-box');
      if (title.textContent.toLowerCase().includes(searchTerm)) {
          movieBox.style.display = 'block';
      } else {
          movieBox.style.display = 'none';
      }
  });
});
const searchMovies = () => {
  const term = document.getElementById('search-input').value.toLowerCase();
  document.querySelectorAll('.swiper-slide, .movie-box').forEach(item => {
      const title = item.querySelector('.movie-title').textContent.toLowerCase();
      item.style.opacity = title.includes(term) ? '1' : '0.2';
      item.style.transform = title.includes(term) ? 'scale(1)' : 'scale(0.95)';
      item.style.transition = 'all 0.3s ease';
  });
};

document.getElementById('search-btn').addEventListener('click', searchMovies);
document.getElementById('search-input').addEventListener('keyup', (e) => {
  if (e.key === 'Enter') searchMovies();
});
document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.getElementById("home-button");

  if (homeButton) {
      homeButton.addEventListener("click", function (event) {
          event.preventDefault(); // Ngăn chặn hành vi mặc định

          if (window.location.pathname.includes("index.html") || window.location.pathname === "/") {
              // Nếu đang ở index.html, tải lại trang
              window.location.reload();
          } else {
              // Nếu không phải index.html, chuyển hướng về index.html
              window.location.href = "index.html";
          }
      });
  }
});

 







  