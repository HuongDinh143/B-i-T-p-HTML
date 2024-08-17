let getElementsByTagName = document.getElementsByTagName("p");
console.log(getElementsByTagName[0]);
let getElementsById = document.getElementById("heading")
function test(params) {
    let h2 = document.getElementsByClassName("title");
    console.log(h2[0]);

    h2[1].style.color = "violet";
    let h3 = document.getElementsByTagName("h3");
    h3[0].setAttribute("class", "active")
    let h4 = document.getElementsByClassName("class1");
    // h4[0].classList.add("class3");
    // h4[0].classList.remove("class1");
    // console.log(111, h4[0].classList);
    h4[0].classList.toggle("active")
    document.getElementsByClassName("container")[0].innerHTML = "<h1>hello</h1> "


}
