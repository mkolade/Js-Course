
const buttonTwo = document.querySelector('.btn-2');

function alertbtn2(){
    alert("i also love javascript");
};
buttonTwo.addEventListener('click',alertbtn2);

const changeBgColor = document.querySelector('.box-3');

function changebackground(){
    changeBgColor.style.background = 'blue';
}

changeBgColor.addEventListener('mouseover',changebackground);


const revealButton = document.querySelector('.reveal-button');
const hiddenContent = document.querySelector('.hidden-content');
const container2 = document.querySelector('.container2');

function revealmorea(){
    if(hiddenContent.classList.contains('boxes2'))
    {
        revealButton.classList.remove('boxes2');
        hiddenContent.classList.remove('boxes2');
    }
    else{
        revealButton.classList.add('boxes2');
        hiddenContent.classList.add('boxes2');
    }
}

revealButton.addEventListener('click',revealmorea);



const btn = document.querySelector('#button');
btn.addEventListener('click',function(e){
    console.log(e.target.innertext = 'Clicked!');
    e.target.innerText = 'Clicked!';
},true)


const sports = document.querySelector('#sports');
const football = document.querySelector('#football');
const basketball = document.querySelector('#basketball');
const boxing = document.querySelector('#boxing');
const tennis = document.querySelector('#tennis');
const golf = document.querySelector('#golf');

sports.addEventListener('click',function(e){
    console.log(e.target.getAttribute('id') + ' is Clicked');
    const target = e.target;

    if(target.matches('li'))
    {
        target.style.background = 'lightgrey';
    }
})

const newsport = document.createElement('li');
newsport.innerText= 'Polo';
newsport.setAttribute('id','rugby');

sports.appendChild(newsport);