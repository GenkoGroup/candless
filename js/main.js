
var close_button = document.querySelector(".close");
var mob_menu = document.querySelector(".mob_menu");
var basket_link = document.querySelector(".basket_link");
var checkout_sidebar = document.querySelector(".checkout_sidebar");
var close_checkout = document.querySelector(".close_checkout");
var basket_link_mob = document.querySelector(".basket_link_mob");


$('header .info .close').click(function () {
    $('header .info').addClass('hidden')
})

$('.link_mob_menu').click(function () {
    $('.mob_menu').addClass('trans_mob');
})

$('.close, .mob_menu .container .center_menu_mob .nav .menu li').click(function () {
    $('.mob_menu').removeClass('trans_mob');
})

/*basket_link.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) checkout_sidebar.classList.toggle("trans_mob");
})*/

close_checkout.addEventListener("click", function (e) {
    checkout_sidebar.classList.toggle("trans_mob");
})


$('.search').click(function () {
    $('#search').addClass("trans_mob");
})

$('#search').click(function (e) {
    if (e.target === e.currentTarget) $('#search').removeClass("trans_mob");
})

function activeLink() {
    const arr_links = document.querySelectorAll("ul > li.list > a.link");
    arr_links.forEach(link => {
        const pathName = window.location.href;
        const link_href = link.href;
        if(pathName == link_href) {
            link.classList.add("active")
        }
    })
}

window.addEventListener("DOMContentLoaded", activeLink());

var vue = new Vue({
    el: '#main',
    data: {
      page: 'CATEGORY'
    },
    methods: {
        check() {
            console.log(window.location);
        }
    }
})

