import React from 'react'
import './Home.css'

export default function Principal() {
    return (
        <section className='cuerpo'>
            <div className='contenedor'>
                <h1 className='tituloPrincipal'>¿Qué es un juego de rol?:</h1>
                <p>Es un juego en el que cada jugador interpreta a un personaje (denominado <strong>PJ</strong> o Personaje Jugador), dentro de un mundo (o <strong>Setting</strong>) 
                controlado por otro de los participantes, el Mestro de Juego (también conocido como Director de Juego, Dungeon Master o <strong>DM</strong>).</p>
            </div>
            <div className='contenedor'>
                <h2 className='subTitulo'>El director de juego:</h2>
                <p>Es quien supervisa el curso de las partidas y que, a su vez, cumple la función de narrador de la historia, y mediador entre los jugadores.</p>
                <p>También es quien se encarga de interpretar a los Personajes No Jugadores (<strong>PNJ</strong> o NPC, None Playable Character), y todo lo que está fuera del control de los PJ, como la ambientación, las criaturas que habitan el mundo, etc.</p>
            </div>
            <div className='contenedor'>
                <h2 className='subTitulo'>Sistemas:</h2>
                <p>La gran mayoría de juegos de rol utilizan lo que se denomina como Sistema, que es un conjunto de reglas, que le permiten tanto al DM como a los jugadores tener una guía de cómo se determinan los resultados, o se realizan ciertas acciones dentro del juego.</p>
                <p>Por ejemplo, cómo se determinaría  el orden, y el proceso de un combate, entre otras cosas.</p>
                <p>El sistema tambíen nos da una idea de la ambientación que puede llegar a tener un juego que lo utilice, o de la manera en que los jugadores pueden crear o rellenar su Hoja de Personaje.</p>
            </div>
            <div className='contenedor'>
                <h2 className='subTitulo'>¿Qué es una Hoja de Personaje?</h2>
                <p>Es una representación en papel de información sobre un PJ. Incluye características físicas, mentales, y sociales de éste, sus habilidades, sus debilidades, su equipo, hechizos, etc.</p>
                <p>La Hoja de Personaje, su proceso de llenado, y las características que muestra, varían según el sistema con el que se vaya a jugar.</p>
            </div>
        </section>
    )
}
