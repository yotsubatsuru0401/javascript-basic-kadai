const Btn = document.getElementById('btn');

const Text = document.getElementById('text');

settimeout(() => {


Btn.addEventListener('click', () => {

Text.textContent = 'ボタンをクリックしました';

});
}, 2000);