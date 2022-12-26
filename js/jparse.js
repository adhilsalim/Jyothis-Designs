import hotTrendData from '../json/hotTrend.json' assert { type: 'json' };

var html = "";
var prehtml = `<div class="section-title"><h4>Hot Trend</h4></div>`;

hotTrendData.forEach((item) => {
    html += `<div class="trend__item">
    <div class="trend__item__pic">
        <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="trend__item__text">
        <h6>${item.name}</h6>
        <div class="product__price">$ ${item.price}</div>
    </div>
    </div>`
});

document.getElementById('check').innerHTML = prehtml + html;
