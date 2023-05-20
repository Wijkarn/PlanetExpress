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

import { Navbar } from '../components/Navbar';

function App() {
    return (
        <Navbar/>
    );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);