let ul = document.createElement("ul");

let li1 = document.createElement('li');
li1.textContent = `list item number 1`;
ul.appendChild(li1);

let li2 = document.createElement('li');
li2.textContent = `list item number 2`;
ul.appendChild(li2);

let li3 = document.createElement('li');
li3.textContent = `list item number 3`;
ul.appendChild(li3);
console.log(ul);


document.write(ul.innerHTML);