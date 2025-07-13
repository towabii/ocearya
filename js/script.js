let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(newIndex) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active", "prev-slide");
    if (i === newIndex) {
      slide.classList.add("active");
    } else if (i === slideIndex) {
      slide.classList.add("prev-slide");
    }
  });
  slideIndex = newIndex;
}

function plusSlides(n) {
  let newIndex = (slideIndex + n + totalSlides) % totalSlides;
  showSlide(newIndex);
}

// 初期表示
showSlide(slideIndex);

// 自動スライド（5秒ごと）
setInterval(() => {
  plusSlides(1);
}, 5000);
