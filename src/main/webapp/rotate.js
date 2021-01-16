function australia() {
    if (localStorage.getItem('aus') === '') {
        $(document).scrollTop($('html').height());
        jQuery('html').css({transform: 'rotate(180deg)'});
        localStorage.setItem('aus', 'aus');
    } else {
        jQuery('html').css({transform: 'rotate(0deg)'});
        localStorage.setItem('aus', '');
    }
}
document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('aus') === 'aus') {
        $(document).scrollTop($('html').height());
        jQuery('html').css({transform: 'rotate(180deg)'});
    }
});
