const dogs = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
}

//regular
console.log('hello');

//Interpolated
console.log('Hello I am a %s string!', '💩');

//Styled
/*
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue')
*/

//warning!
console.warn('Oh noo');

//Error
console.error('Something went bad!');

//Info
console.info('Crocodiles eat 3-4 people per year');

//Testing
const p = document.querySelector('p');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

//Clearing
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p);

//Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

//Counting
console.count('Elise');
console.count('Elise');
console.count('Katya');
console.count('Katya');
console.count('Elise');
console.count('Katya');
console.count('Elise');
console.count('Katya');
console.count('Katya');
console.count('Katya');
console.count('Katya');
console.count('Katya');

//Timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });
console.table(dogs);
