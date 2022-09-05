import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { SecondsToFromated } from './components/ej1';
import {Punto2} from './components/ej2'
import { Saludo } from './components/ej3';
import { Repetidos } from './components/ej4';
import { Ejercicio6 } from './components/ej6';
import Ejercicio7 from './components/ej7';
import Punto8 from './components/ej8';
import Punto9 from './components/ej9';
import Punto11 from './components/ej11';
import Ejercicio5 from './components/ej5';
import Challenge_1 from './Challenges/Challenge1';
import { Challenge_2 } from './Challenges/Challenge2';
import Challenge_3 from './Challenges/Challenge3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <SecondsToFromated/>
    <Punto2/>
    <Saludo/>
    <Repetidos/>
    <Ejercicio5/>
    <Ejercicio6/>
    <Ejercicio7/>
    <Punto8/>
    <Punto9/>
    <Punto11/>
    <Challenge_1/>
    <Challenge_2 value={0}/>
    <Challenge_3/>
    </>
)