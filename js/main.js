const $btnBookmark = document.querySelector('#bookmark');
const $label = document.querySelector('#label');

$btnBookmark.addEventListener('click', e=>{
    $btnBookmark.classList.toggle('bookmarked');
    $label.classList.toggle('label-marked');
})