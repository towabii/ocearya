let slideIndex = 1;
showSlides(slideIndex);

// 次/前ボタン
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// スライド表示
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// 自動スライド（任意）
setInterval(() => { plusSlides(1); }, 5000);
