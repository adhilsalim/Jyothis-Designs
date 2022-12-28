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
            <div class="product__item__pic set-bg" data-mid=${item.m_id}  data-setbg=${item.image} onclick="${item.function}">
                <div class="label ${item.label_style}">${item.label_text}</div>
                <ul class="product__hover">
                    <li><a href="${item.link}"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="${item.link}" data-mid=${item.m_id} onclick="${item.function}">${item.small_text}</a></h6>
                <div class="product__price">${item.big_text_bold}</div>
            </div>
        </div>
    </div>`;
});

document.getElementById('material-s-0').innerHTML = html;

html = "";

materials.categories.forEach((item) => {
    html +=
        `<div class="card">
    <div class="card-heading ${item.active}">
        <a data-toggle="collapse" data-target="#collapseOne">${item.title}</a>
    </div>
    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
        <div class="card-body"><ul id="${item.id}"></ul>
        </div>
    </div>
    </div>`;
});

document.getElementById('accordionExample').innerHTML = html;

var catId = "1";
html = "";

materials.categories.forEach((cat) => {
    cat.items.forEach((item) => {
        html +=
            `<li><a href="#">${item.item_name}</a></li>`;
    });
    document.getElementById('category-' + catId).innerHTML = html;
    catId++;
    html = "";
});




//FUNCTIONS
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
