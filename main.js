var showloading = document.getElementsByClassName('loa');
// 画面本体のdivを取得
var contents = document.getElementsByName('body');
// 読み込みが完了したら発動
window.addEventListener('load', function () {
// loadingのdivを非表示に
loa.style.display = 'none';
// contentsのdivを表示
contents.classList.remove('hidden');
});

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar')
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change')
});

