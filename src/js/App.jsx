import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import "../css/App.css";

// const name = 'Aquaman';
// const age = 81;

// const reactElement = <h1>Hej, {name}! Du är {age*12} månader gammal.</h1>;
// console.log(reactElement);

// const root = createRoot( document.querySelector("#root") );
// root.render(reactElement);

//---------------------------------------------------

// import superheros from '../data/superheros';
// import HeroCard from '../components/HeroCard.jsx';
// console.log(superheros)

// function App(){
//     return(
//         <div>
//             <HeroCard hero={superheros.hero1}/>
//             <HeroCard hero={superheros.hero2}/>
//         </div>
//     );
// }

// const root = createRoot(document.querySelector("#root"));
// root.render(<App/>); //Komponenten kan nu skrivas som en html tag

// Övning 1 --------------------------------------------------------------------------------------------
/*
import Gameover from '../components/Gameover';
const name = "Max";
const points = 6;
const causeOfDeath = "Stupidity";

function App(){
    return(
        <Gameover name={name} points={points} causeOfDeath={causeOfDeath}/>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>);
*/
// Övning 2 -------------------------------------------------------------------------------------------
/*
import { Highscore } from '../components/Highscore';

const arr = [{ name: "Wijk", score: 10 }, { name: "Max", score: 3 }, { name: "Markus", score: 5 }, { name: "Deez", score: 6 }, { name: "Nutz", score: 9 }];

function App(){
    return(
        <Highscore arr={arr}/>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App/>);
*/
// Övning 3 ------------------------------------------------------------------------------------------------------

import { ShoppingCart } from '../components/ShoppingCart';

const arr = [{ id: 0, product: "Melons", price: 40, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cantaloupe_and_canary_melon.jpg/1280px-Cantaloupe_and_canary_melon.jpg" }, { id: 1, product: "Cucumber", price: 10, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cucumber_BNC.jpg/1280px-Cucumber_BNC.jpg" }, { id: 2, product: "Tomtatoes", price: 5, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/1024px-Tomato_je.jpg" }, { id: 3, product: "Apple", price: 8, imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/1920px-Pink_lady_and_cross_section.jpg" }]

function App() {
    return (
        <ShoppingCart arr={arr} />
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);