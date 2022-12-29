import insta from '../json/insta.json' assert { type: 'json' };
import material from '../json/material.json' assert { type: 'json' };
import design from '../json/design.json' assert { type: 'json' };

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

html = "";
var currentPageUrl = window.location.href;
var pLoc = currentPageUrl.indexOf('?p=');
var material_id = currentPageUrl.slice(pLoc + 3, pLoc + 6);
var design_id = currentPageUrl.slice(pLoc + 6, pLoc + 9);

console.log(pLoc);
console.log(currentPageUrl.slice(pLoc + 3, pLoc + 6));
console.log(currentPageUrl.slice(pLoc + 6, pLoc + 9));


if (currentPageUrl.includes('?p=')) {

    material.materials.forEach((item) => {
        if (item.m_id == material_id) {
            html = `Material: ${item.big_text_bold}<br>`;
            console.log(item.big_text_bold);
        }
    });

    design.designs.forEach((item) => {
        if (item.d_id == design_id) {
            html += `Design: ${item.big_text_bold}`;
            console.log(item.big_text_bold);
        }
    });

    document.getElementById('p-m-d').innerHTML = html;
}
else {
    console.log('no product details');
}


//FUNCTIONS
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
