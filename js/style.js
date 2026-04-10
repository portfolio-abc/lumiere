// モーダル機能
const items = document.querySelectorAll(".style_item");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".modal_close");

// 開く
items.forEach(item => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// ×ボタンで閉じる
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});