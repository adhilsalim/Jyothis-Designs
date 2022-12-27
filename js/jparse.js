import mini from '../json/mini.json' assert { type: 'json' };
import insta from '../json/insta.json' assert { type: 'json' };
import banner from '../json/banner.json' assert { type: 'json' };

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
        <div class="product__price">$ ${item.price}</div>
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
        <div class="product__price">$ ${item.price}</div>
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
        <div class="product__price">$ ${item.price}</div>
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

$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
//------------------banner------------------//
//1
html = "";
prehtml = `<section class="banner set-bg" data-setbg="${banner.image}">
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

console.log(prehtml + html + posthtml)
document.getElementById("banner-s-0").insertAdjacentHTML("afterend", prehtml + html + posthtml);