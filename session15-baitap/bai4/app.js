let listImages = Array.from(document.querySelectorAll("#list li img"));
let showImage = document.querySelector(".show-image img");
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");


let currentIndex = 0;
function updateShowImage() {
    // Cập nhật src của ảnh trong show-image để hiển thị ảnh được click
    showImage.src = listImages[0].src;
}

listImages.forEach((imgElement, index) => {
    imgElement.addEventListener("click", () => {
        showImage.src = listImages[index].src;
    })


})
let handleSlide = function () {
    currentIndex++;
    if (currentIndex >= listImages.length) {
        currentIndex = 0;
    }
    let firstItem = listImages.shift();
    listImages.push(firstItem);
    updateShowImage(currentIndex);
    render();
}

setInterval(handleSlide, 4000)


nextBtn.addEventListener("click", () => {
    clearInterval(handleSlide)
    let firstItem = listImages.shift();
    listImages.push(firstItem);
    updateShowImage();
    render();
    setInterval(handleSlide, 4000)

});


prevBtn.addEventListener("click", () => {
    clearInterval(handleSlide)
    let lastItem = listImages.pop();
    listImages.unshift(lastItem);
    updateShowImage();
    render();
    setInterval(handleSlide, 4000)
});

function render() {
    let html = "";
    for (let i = 0; i < listImages.length; i++) {
        if (i === 0) {
            html += `<li class="active">${listImages[i].outerHTML}</li>`;
        } else {

            html += `<li>${listImages[i].outerHTML}</li>`;
        }
    }
    document.querySelector("#list").innerHTML = html;

}


