import mini from '../json/mini.json' assert { type: 'json' };
import insta from '../json/insta.json' assert { type: 'json' };

//1
var html = "";
var prehtml = `<div class="section-title"><h4>Hot Trend</h4></div>`;

mini.ht.forEach((item) => {
    html += `<div class="trend__item">
    <div class="trend__item__pic">
        <img src="${item.image}" alt="${item.name}" title="${item.product_id}">
    </div>
    <div class="trend__item__text">
        <h6>${item.name}</h6>
        <div class="product__price">$ ${item.price}</div>
    </div>
    </div>`
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
    </div>`
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
    </div>`
});
document.getElementById('mini-s-3').innerHTML = prehtml + html;

//------------------insta------------------//
html = "";
prehtml = "";

insta.posts.forEach((item) => {
    html +=
        `<div class="col-lg-2 col-md-4 col-sm-4 p-0">
    <div class="instagram__item set-bg" data-setbg="${item.image}">
        <div class="instagram__text">
            <i class="fa fa-instagram"></i>
            <a href="${item.post_url}">${item.user_id}</a>
        </div>
    </div>
</div>`
});

document.getElementById('insta-s-0').innerHTML = html;