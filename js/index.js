//メインビジュアル取得
const images = document.querySelectorAll(".mv_img");
let current = 0;

//画像を4秒ごとに切り替え
setInterval(() => {
  images[current].classList.remove("active");

  current = (current + 1) % images.length;

  images[current].classList.add("active");
}, 4000);