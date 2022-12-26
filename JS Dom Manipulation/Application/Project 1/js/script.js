
const btn = document.querySelector('#new-quote');
const person = document.querySelector('.person');
const quote = document.querySelector('.quote');

const quotes = [{
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit quo inventore iure, beatae perspiciatis.",

    person:"Mahatma Gandhi"
},{
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam iste libero quisquam voluptatibus minus leniti.",

    person:"Albert Eistein"
},{
    quote: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquam voluptates. Reiciendis ut ab corpiciatis?",

    person:"Aristotle"
},{
    quote: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam voluptatum, voluptates at quis iure optiores eius.",

    person:"Steve Jobs"
},{
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab voluptate aspernatur laudanum illum ad magni!",

    person:"Benjamin Franklin"
},{
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptas ducimus corrupti esse delectus.dem consequuntur!",

    person:"Oprah Winfrey"
},{
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, aliquam voluptates. Reiciendis ut ab corpiciatis?",

    person:"Martin Luther King jnr."
},{
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum laudantium voluptatem in incidunt quasi,",

    person:"Dalai Lama"
},{
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam pariatur, explicabo voluptas s, eligendi possimus.",

    person:"Lao Tzu"
},{
    quote: "I  do the very best i know how . the very best i can; And i mean to keep doing it till the end ",

    person:"Abraham Lincoln"
}];

btn.addEventListener('click',function(){
    let randomNumber = Math.floor(Math.random() * quotes.length);
    
    quote.innerHTML = quotes[randomNumber].quote;
    person.innerHTML = quotes[randomNumber].person;
})