import mini from '../json/mini.json' assert { type: 'json' };
import insta from '../json/insta-home.json' assert { type: 'json' };
import banner from '../json/banner.json' assert { type: 'json' };
import recentOrders from '../json/recentOrders.json' assert { type: 'json' };

//------------------mini------------------//
//1
var html = "";
var prehtml = `<div class="section-title"><h4>Hot Trend</h4></div>`;
var posthtml = "";

mini.ht.forEach((item) => {
    html += `<div class="trend__item">
    <div class="trend__item__pic">
        <img src="${item.image}" alt="${item.name}" title="${item.product_id}">
    </div>
    <div class="trend__item__text">
        <h6>${item.name}</h6>
        <div class="product__price">${item.price}</div>
    </div>
    </div>`;
});
document.getElementById('mini-s-1').innerHTML = prehtml + html;

//2
html = "";
prehtml = `<div class="section-title"><h4>BEST SELLER</h4></div>`;

mini.bs.forEach((item) => {
    html += `<div class="trend__item">
    <div class="trend__item__pic">
        <img src="${item.image}" alt="${item.name}" title="${item.product_id}">
    </div>
    <div class="trend__item__text">
        <h6>${item.name}</h6>
        <div class="product__price">${item.price}</div>
    </div>
    </div>`;
});
document.getElementById('mini-s-2').innerHTML = prehtml + html;

//3
html = "";
prehtml = `<div class="section-title"><h4>FEATURE</h4></div>`;

mini.bs.forEach((item) => {
    html += `<div class="trend__item">
    <div class="trend__item__pic">
        <img src="${item.image}" alt="${item.name}" title="${item.product_id}">
    </div>
    <div class="trend__item__text">
        <h6>${item.name}</h6>
        <div class="product__price">${item.price}</div>
    </div>
    </div>`;
});
document.getElementById('mini-s-3').innerHTML = prehtml + html;

//------------------insta------------------//
html = "";
prehtml = "";

insta.posts.forEach((item) => {
    html +=
        `<div class="col-lg-2 col-md-4 col-sm-4 p-0">
    <div class="instagram__item set-bg" data-setbg=${item.image}>
        <div class="instagram__text">
            <i class="fa fa-instagram"></i>
            <a href="${item.post_url}">${item.user_id}</a>
        </div>
    </div>
</div>`;
});
document.getElementById('insta-s-0').innerHTML = html;

//------------------banner------------------//
//1
html = "";
prehtml = `<section class="banner set-bg" data-setbg=${banner.image}>
<div class="container">
    <div class="row">
        <div class="col-xl-7 col-lg-8 m-auto">
            <div class="banner__slider owl-carousel" id="banner-s-1">`;
posthtml = `</div></div></div></div></section>`;

banner.slides.forEach((item) => {
    html +=
        `<div class="banner__item">
        <div class="banner__text">
            <span>${item.small_text}</span>
            <h1>${item.big_text}</h1>
            <a href="${item.button_link}">${item.button_text}</a>
        </div>
    </div>`;
});

document.getElementById("banner-s-0").insertAdjacentHTML("afterend", prehtml + html + posthtml);

//------------------recentOrders------------------//
html = "";
prehtml = "";
posthtml = "";

recentOrders.orders.forEach((item) => {
    html +=
        `<div class="col-lg-3 col-md-4 col-sm-6 ${item.category}">
    <div class="product__item">
        <div class="product__item__pic set-bg" data-mdid=${item.md_id} data-setbg=${item.image} onclick="${item.function}">
            <div class="label ${item.label_style}">${item.label_text}</div>
            <ul class="product__hover">
                <li><a href="${item.link}"><span class="icon_bag_alt"></span></a></li>
            </ul>
        </div>
        <div class="product__item__text">
            <h6><a href="${item.link}" data-mdid=${item.md_id} onclick="${item.function}">${item.text_small}</a></h6>
            <div class="product__price">${item.text_big_small}</div>
        </div>
    </div>
    </div>`;
});

document.getElementById('recentOrders-s-0').innerHTML = html;


//FUNCTIONS//
$(".banner__slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true
});

$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});