/**
 * Created by alexander on 23/07/2019.
 */
let i = 0; // Start point
let images = [];
const time = 3000;

//Image list
images[0] = 'img/img-1.jpg';
images[1] = 'img/img-2.jpg';
images[2] = 'img/img-3.jpg';

//Change Image
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else  {
        i = 0;

    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg();