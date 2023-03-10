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

if (currentPageUrl.includes('?p=')) {

    var pLoc = currentPageUrl.indexOf('?p=');
    var material_id = currentPageUrl.slice(pLoc + 3, pLoc + 6);
    var design_id = currentPageUrl.slice(pLoc + 6, pLoc + 9);

    // console.log(Number.isInteger(pLoc) + ' ' + pLoc);
    // console.log(Number.isInteger(currentPageUrl.slice(pLoc + 3, pLoc + 6)) + ' ' + currentPageUrl.slice(pLoc + 3, pLoc + 6));
    // console.log(Number.isInteger(currentPageUrl.slice(pLoc + 6, pLoc + 9)) + ' ' + currentPageUrl.slice(pLoc + 6, pLoc + 9));

    var validMaterialNumber = currentPageUrl.slice(pLoc + 3, pLoc + 6);
    var validDesignNumber = currentPageUrl.slice(pLoc + 6, pLoc + 9);
    var materialName = '';
    var designName = '';

    if (validDesignNumber && validMaterialNumber) {
        material.materials.forEach((item) => {
            if (item.m_id == material_id) {
                html = `Material: ${item.big_text_bold}<br>`;
                materialName = item.big_text_bold;
            }
        });

        design.designs.forEach((item) => {
            if (item.d_id == design_id) {
                html += `Design: ${item.big_text_bold}`;
                designName = item.big_text_bold;
            }
        });

        document.getElementById('p-m-d').innerHTML = html;

        if (materialName == '' || designName == '') {
            console.log('no product details');
            document.getElementById('p-m-d').innerHTML = 'No Product Details';
            $("#myModal--effect-pulse").modal('show');
        }
    }
    else {
        console.log('no product details');
        document.getElementById('p-m-d').innerHTML = 'No Product Details';
        $("#myModal--effect-pulse").modal('show');
    }


}
else {
    console.log('no product details');
    document.getElementById('p-m-d').innerHTML = 'No Product Details';
    $("#myModal--effect-pulse").modal('show');
}


//FUNCTIONS
$('.set-bg').each(function () {
    var bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
});
