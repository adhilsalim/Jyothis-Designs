import material from '../json/material.json' assert { type: 'json' };
import design from '../json/design.json' assert { type: 'json' };

var html = "";
var prehtml = "";
var posthtml = "";
var currentPageUrl = window.location.href;
var pLoc = currentPageUrl.indexOf('?p=');
var material_id = currentPageUrl.slice(pLoc + 3, pLoc + 6);
var design_id = currentPageUrl.slice(pLoc + 6, pLoc + 9);
var size_id = currentPageUrl.slice(pLoc + 9, pLoc + 10);
console.log(size_id);
console.log(design_id);
console.log(material_id);


if (currentPageUrl.includes('?p=')) {

    material.materials.forEach((item) => {
        if (item.m_id == material_id) {
            html = `${item.big_text_bold}`;
            document.getElementById('selectedMaterial').innerHTML = html;
            document.getElementById('in-m').value = html;
        }
    });

    html = "";

    design.designs.forEach((item) => {
        if (item.d_id == design_id) {
            html = `${item.big_text_bold}`;
            document.getElementById('selectedDesign').innerHTML = html;
            document.getElementById('in-d').value = html;
        }
    });

    switch (size_id) {
        case '1':
            document.getElementById('selectedSize').innerHTML = 'Medium';
            document.getElementById('in-s').value = 'Medium';
            break;
        case '2':
            document.getElementById('selectedSize').innerHTML = 'Large';
            document.getElementById('in-s').value = 'Large';
            break;
        case '3':
            document.getElementById('selectedSize').innerHTML = 'XL';
            document.getElementById('in-s').value = 'XL';
            break;
        case '4':
            document.getElementById('selectedSize').innerHTML = 'XXL';
            document.getElementById('in-s').value = "XXL";
            break;
        case '5':
            document.getElementById('selectedSize').innerHTML = '3XL';
            document.getElementById('in-s').value = "3XL";
            break;
        default:
            document.getElementById('selectedSize').innerHTML = 'error';
            document.getElementById('in-s').value = 'error';
    }
}
else {
    console.log('no product details');
}