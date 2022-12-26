//creating elements
const title = document.querySelector('#main-heading');

const items = document.querySelectorAll('.list-items');

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
li.innerText = 'X-men';

/*
//modifying attributes 1
li.setAttribute('id','main-heading');
li.removeAttribute('id','main-header');
*/

//modifying attributes 2
li.classList.add('list-items')
li.classList.remove('list-items');

//to know if an elements contains a class
console.log(li.classList.contains('list-items'));

//to remove element
li.remove();

/*
//CHILD NODE TRAVERSAL
 let list = document.querySelector('ul');
 //method1
 console.log(list.childNodes);
 console.log(list.firstChild);
 console.log(list.lastChild);
 list.childNodes[1].style.backgroundColor = 'blue';
 list.childNodes[3].style.backgroundColor = 'orange';
 
 //method2
 console.log(list.children)
 console.log(list.firstElementChild.outerHTML);
 console.log(list.lastElementChild.outerHTML);
 list.lastElementChild.style.backgroundColor = 'red';
 list.children[3].style.backgroundColor = 'yellow';
 */

 //SIBLING NODE TRAVERSAL
 let list = document.querySelector('ul');
 console.log(list);
 console.log(list.children);
    //method1
 console.log(list.previousSibling);
 console.log(list.nextSibling);
   //method2 
 console.log(list.previousElementSibling);
 console.log(list.NextElementSibling);