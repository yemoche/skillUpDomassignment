//DOM CRASH COURSE PART 1

// Examining the document object

//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;//I tried changing it to cambodia, it didspalyed undefined
//console.log(document.doctype);//It displayed null not the doctype
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[9]);
//document.all[9].textContent = 'Hello';
//console.log(document.forms);
//console.log(document.links);
//console.log(document.forms[0]);
//console.log(document.images);

//Selectors method

//GETELEMENTBYID
//console.log(document.getElementById('header-title'));
//let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent = 'Composite Heap';
//headerTitle.innerText = 'Heap Storage';
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//headerTitle.style.borderBottom = 'solid 3px #000';//for header title
//let header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000'; //for main header

// GETELEMENTSBYCLASSNAME

// let memories = document.getElementsByClassName('memory-group-number');
// console.log(memories);
// console.log(memories[1]);
// memories[1].textContent = 'caveat';
// memories[1].style.fontWeight = 'bold';
// memories[1].style.backgroundColor = 'Violet';

// //To give a uniform backgorund colour to the memories elements
// //memories.style.backgroundColor = '#f4f4f4' // it gives error, because it is an array

//  //A for loop will help us in solving this
// for(let count=0; count<memories.length; count++){
//     memories[count].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'caveat';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'Violet';

// //To give a uniform backgorund colour to the memories elements
// //li.style.backgroundColor = '#f4f4f4' // it gives error, because it is an array

// //A for loop will help us in solving this
// for(let count=0; count<li.length; count++) {
//    li[count].style.backgroundColor = '#f4f4f4';
// }

//QUERYSELECTOR used for one item

// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 5px #ccc';

// let input = document.querySelector('input');
// input.value = 'Password Placeholder';//grabs the first input by default

// let submit = document.querySelector('input[type="submit"]');
// submit.value='CLICK';

// let memories = document.querySelector('.memory-group-number');
// memories.style.color = 'red';

// //To pick the last item
// let lastMemories = document.querySelector
// ('.memory-group-number:last-child');
// lastMemories.style.color = 'blue';

// // To pick the second item
// let secondMemories = document.querySelector
// ('.memory-group-number:nth-child(2)');
// secondMemories.style.color = 'orange';

//QUERYSELECTORALL

// let titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Stack';

// let odd = document.querySelectorAll('li:nth-child(odd)');//we use for loop to give the li items the same style for the odd definition
// let even = document.querySelectorAll('li:nth-child(even)');

// for(count1 = 0; count1 < odd.length; count1++) {
//     odd[count1].style.backgroundColor = '#f4f4f4';
//     even[count1].style.backgroundColor = '#ccc';

// }

//DOM CRASH COURSE PART 2

//TRAVERSING THE DOM
let memoryList = document.querySelector('#memories');
// // parentNode
// console.log(memoryList.parentNode);
// memoryList.parentNode.style.backgroundColor = '#f4f4f4'; //it changes the background of the div
// console.log(memoryList.parentNode.parentNode); //This changes the container of the div, parent container
// console.log(memoryList.parentNode.parentNode.parentNode); //This changes the container parent which is the body

// parentElement -does the same thing as parentNode
console.log(memoryList.parentElement);
memoryList.parentElement.style.backgroundColor = '#f4f4f4'; //it changes the background of the div
console.log(memoryList.parentElement.parentElement); //This changes the container of the div, parent container
console.log(memoryList.parentElement.parentElement.parentElement); //This changes the container parent which is the body


// //childNodes it includes any white space and lines
// console.log(memories.childNodes);

// //Children it helps to remove white spaces
// console.log(memories.children);
// console.log(memories.children[1]);
// memories.children[1].style.backgroundColor = 'Yellow';

// // firstChild
// //console.log(memories.firstChild);
// //first elementChild
// console.log(memories.firstElementChild); //always use as against firstChild
// memories.firstElementChild.textContent = 'Storage'; //always use as against firstChild

//lastChild
//console.log(memories.lastChild);
// // lastElementChild
// console.log(memories.lastElementChild); //always use as against lastChild
//  memories.lastElementChild.textContent = 'Storage 2'; //always use as against firstChild

// Siblings means both tags are on the same indentation lines

// //nextSibling
// console.log(memories.nextSibling);// give the text node
// //nextElementSibling
// console.log(memories.nextElementSibling);//though it has no nextElementSibling, but i created a span element so as to capture it

// // previousSibling
// console.log(memories.previousSibling); // it gives a text node
// // previousElementSibling
// console.log(memories.previousElementSibling);
// memories.previousElementSibling.style.color = 'green';

//createElement
let newDiv = document.createElement('div');

//Add Class
newDiv.className = 'Calvary';

//Add id
newDiv.id = 'Calvary2';

//Add attribute
newDiv.setAttribute('title','Calvary Div');

//create a test Node
let newDivText = document.createTextNode('Calvary World');

//Add text to div
newDiv.appendChild(newDivText);

//To insert this newly created Div in the existing DOM, we target the header as an example
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv,h1);





