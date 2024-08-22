const imgs = document.querySelectorAll("li img");
const contentImg = document.getElementById("content-img");
let showingIndex = 1;

imgs.forEach((img, index) => {
    img.addEventListener('click', function () {
        console.log(img.src);
        contentImg.src = img.src;
        showingIndex = index + 1;
    });
});

setInterval(() => {
    showingIndex++;
    if (showingIndex > imgs.length) {
        showingIndex = 1;
    }
    contentImg.src = `./img/img${showingIndex}.png`;
}, 3000);

function showPre() {
    showingIndex--;
    if (showingIndex < 1) {
        showingIndex = imgs.length;
    }
    contentImg.src = `./img/img${showingIndex}.png`;
}

function showNext() {
    showingIndex++;
    if (showingIndex > imgs.length) {
        showingIndex = 1;
    }
    contentImg.src = `./img/img${showingIndex}.png`;
}
