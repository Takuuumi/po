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

