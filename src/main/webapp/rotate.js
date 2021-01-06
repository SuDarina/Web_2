function australia() {
    if (localStorage.getItem('aus') === '') {
        jQuery('body').css({transform: 'rotate(180deg)'});
        localStorage.setItem('aus', 'aus');
    } else {
        jQuery('body').css({transform: 'rotate(0deg)'});
        localStorage.setItem('aus', '');
    }
}
document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('aus') === 'aus') {
        jQuery('body').css({transform: 'rotate(180deg)'});
    }
});
