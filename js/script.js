//ナビボタンとナビリスト取得  
const toggle = document.querySelector(".menu_toggle");
const nav = document.querySelector(".nav");

//ナビボタン開閉
  toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  });

//ページTOPボタンとフッター取得
const pageTop = document.querySelector(".page_top");
const footer = document.querySelector(".footer");

//スクロール時の処理
window.addEventListener("scroll", () => {

  //スクロール300pxでTOPボタン表示
  if (window.scrollY > 300) {
    pageTop.classList.add("show");
  } else {
    pageTop.classList.remove("show");
  }
	
  //フッターに被った時に色変更
  const footerTop = footer.getBoundingClientRect().top; //フッター画面のどこにあるのか取得
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    pageTop.classList.add("footer_active");
  } else {
    pageTop.classList.remove("footer_active");
  }

});