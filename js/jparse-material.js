import insta from '../json/insta.json' assert { type: 'json' };
import materials from '../json/material.json' assert { type: 'json' };

//------------------insta------------------//
var html = "";
var prehtml = "";
var posthtml = "";

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

//------------------materials------------------//
html = "";
prehtml = "";
posthtml = "";

materials.materials.forEach((item) => {
    html +=
        `<div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg=${item.image}>
                <div class="label ${item.label_style}">${item.label_text}</div>
                <ul class="product__hover">
                    <li><a href="${item.link}"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="${item.link}">${item.small_text}</a></h6>
                <div class="product__price">${item.big_text_bold}</div>
            </div>
        </div>
    </div>`;
});

document.getElementById('material-s-0').innerHTML = html;

//FUNCTIONS
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});

//product id