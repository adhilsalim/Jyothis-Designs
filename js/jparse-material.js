import insta from '../json/insta.json' assert { type: 'json' };

//------------------insta------------------//
var html = "";
var prehtml = "";

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