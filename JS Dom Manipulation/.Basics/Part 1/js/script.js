//Mastering Console Log

/*
let juice = 'john';
let age = 34;

console.log('My name is ' + juice + ' and i am ' + age);

console.log('my name is '+juice+'')



const s ='hello world';
console.log(s.length);
console.log(s.toUpperCase());

const j = 'Hello goat';
console.log(j.substring(0,5).toUpperCase());

const k = 'dogs, cat, rat, fish';
console.log(k.split(', '))
*/

/*
//Arrays- variables that hold multiple values

//traditional creation method
const array_one = new Array(1,2,3,4,5);
console.log(array_one);

//New creation method
const fruit =['pawpaw','mango','orange'];
console.log(fruit);
console.log(fruit[0]);
fruit[3] ='agbado';

//Add To The Beginning
fruit.unshift('maize');

//Add To The End
fruit.push('corn');

//Remove The last element
fruit.pop();

console.log(fruit);

//to know if something is an array
console.log(Array.isArray(fruit));

//to know the index of an array
console.log(fruit.indexOf('orange'))
*/


//Nested Array
/*
const person = {
    firstname: 'Akolade',
    lastname: 'Moshood',
    age: 30 ,
    hobbies: ['music','work','coding'],
    address:{
        street: 'Obalende',
        town: 'Ikeja',
        state: 'Lagos',
        country: 'Nigeria'
    }
}
console.log(person);
console.log(person.lastname, person.firstname)
console.log(person.hobbies[1]);
person.gmail = 'john';
console.log(person);
*/

/*
const todos =[
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },

    {
        id: 2,
        text: 'Do The Dishes',
        isCompleted: true
    },

    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
]

//console.log(todos);
//console.log(todos[1].text);


//how to jsonfy
const todoJSON = JSON.stringify(todos);
//console.log(todoJSON)





//Loops:
//for loop
for(let a=0; a<=5; a++)
{
    //console.log(a);
    //console.log('For Loop Number:'+a+'')
}

//while loop
let a = 0;
while(a<11)
{
   // console.log(a);
   // console.log('For Loop Number: '+a+'');
    a++;
}


//Todos loop Examples 
for(let a=0; a<todos.length; a++)
{
    console.log(todos[a].text);
};

for(let todo of todos){
    console.log(todo.text);
};

//foreach loop
todos.forEach(function(todo){
    console.log(todo.text)
});

//map loop
let todotextwithmap= todos.map(function(todo){
    return todo.text;
});
console.log(todotextwithmap);

//filter loop
let todotextwithfilter= todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todotextwithfilter);

//filter+map loop
let todotextcombine= todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todotextcombine);
*/

//CONDITIONAL STATEMENTS

/*
//IF and ELSE statement
//Two equals sign means their datatype does not mean as long as their values match.While tripple equals sign means their datatype must be same for the statement to be true

//single variable
const x ='5';
if(x === 10)
{
    console.log('X is 10');
}
else if(x >= 10)
{
    console.log('X is Greater Than 10');
}
else
{
    console.log('X is Less Than 10')
}

//multiple variable
const v = 12;
const y = '4';

if(v < 5 || y === 3)
{
    console.log('V is greater than 5 or Y equals 4');
}
 else if(v > 5 && y === 4)
{
    console.log('V is greater than 5 And Y equals 4');
}
else{
    console.log('Numbers Can Be Really annoying');
}

const c = '10';

const color = c >= 10 ? 'blue':'black';
console.log(color);

switch(color){
    case 'black':
        console.log('Color Is Black')
    break;

    case 'blue':
        console.log('Color Is blue')
    break;

    default:
        console.log('Color Is Neither Black Nor Blue')
    break;
}
*/

//FUNCTIONS
//Simple Arithmetics

/*
//method 1
function addnums(num1 = 1,num2 = 1)
{
    return num1 + num2;
}
//console.log(addnums(5,5));

//method 2
const addnum = (num1,num2) => num1 + num2;
//console.log(addnum(4,3));

const add = num1 => num1 + 5;
//console.log(add(3));

//object Oriented Programming

//Old Method
function Person(firstname,lastname,dob)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

Person.prototype.getbirthyear = function()
{
    return  this.dob.getFullYear();
}

Person.prototype.getfullname = function()
{
    return this.firstname+' '+this.lastname;
    
}

const person1 =new Person('Kayode','Tolani','2-5-2001');
const person2 =new Person('Malik','Hameed','6-4-2001');
console.log(person1.getbirthyear());
console.log(person2.getfullname());

//New Method

class Person1{
    constructor(firstname,lastname,dob){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);
    }

    getbirthyear()
    {
        return  this.dob.getFullYear();
    }

    getfullname()
    {
        return this.firstname+' '+this.lastname;
    }
}

const person3 =new Person1('Kayode','Tolani','2-5-2001');
const person4 =new Person1('Malik','Hameed','6-4-2001');
console.log(person3.getbirthyear());
console.log(person4.getfullname());
console.log(person3);
*/

//JS DOM

/*
//SELECTORS
//single element selectors
const form = document.getElementById('my_form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));

//Multiple element selectors
const items = document.querySelectorAll('.item');

items.forEach(function(item)
{
    console.log(item);
})

items.forEach((item) => console.log(item));


console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('li'))
*/

//Methods

/*
const ul = document.querySelector('.items')
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.remove()
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerHTML = '<h2>Mk</h2>';
ul.lastElementChild.innerHTML = '<h3>YELLOW</h3>';

const btn = document.querySelector('.btn');
btn.style.background = 'blue';
btn.style.width = '30%';
*/

//EVENTS
//TYPES include:click,mouseover,pagexoffset,pageyoffset
/*
const btn = document.querySelector('.btn');
btn.addEventListener('click',function(bts){
    console.log('click');
})

btn.addEventListener('click',(bts) =>{
    bts.preventDefault();
    console.log(bts);
})

btn.addEventListener('click',(bts) =>{
    bts.preventDefault();
    console.log(bts.target);
})
*/

/*
const btn = document.querySelector('.btn');
btn.addEventListener('mouseout',(bts) =>{
    bts.preventDefault();
    document.querySelector('#my_form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg_dark');
    document.querySelector('.items').firstElementChild.innerHTML='<h3>Hello</h3>';
})
*/

const myForm = document.querySelector('#my_form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');

myForm.addEventListener('submit', (onSubmit) =>
{
    onSubmit.preventDefault();
    //console.log(nameInput.value);

    if( nameInput.value ==='' || emailInput.value ==='')
    {
        msg.classList.add('error') 
        msg.innerHTML = '<h4>Please Input The Required Fields</h4>'
     
       setTimeout(function(){
        msg.remove()
       },3000);
    }
    else{
      const li = document.createElement('li');
      li.appendChild(document.createTextNode(' '+nameInput.value+'  ' + emailInput.value+' '));
      users.appendChild(li);
      //clear fields
      nameInput.value ='';
      emailInput.value = '';    
      console.log(nameInput.value);
    }
})


