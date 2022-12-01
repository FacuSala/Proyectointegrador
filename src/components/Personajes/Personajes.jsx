import React, { useEffect, useState } from 'react'
import './Personajes.css'
import Carta from '../Carta/Carta';


export default function PersonajesList() {
  const listaPersonajes = [
    { nombre: "Mistex", clase: "Clase: Bardo", sistema: "D&D5e", info: "Info: Estudiante de la Prestigiosa Academia.", key: 1 },
    { nombre: "Sadao", clase: "Clase: Takumi", sistema: "Blood and Honor", info: "Info: Cortesano de su clan de samurais.", key: 2 },
    { nombre: "Lucius", clase: "Clase: Artificer", sistema: "D&D5e", info: "Info: Alquimista, actualmente aventurero.", key: 3 },
    { nombre: "Kanagi", clase: "Clase: Sabaku", sistema: "Naruto d10", info: "Info: Estudiante de intercambio en Konoha.", key: 4 },
    { nombre: "Gorm", clase: "Clase: Bardo", sistema: "D&D5e", info: "Info: Espía, y Profeta de la Diosa Scerze.", key: 5 }
  ];

  const botones = [
    {
      nombre: "Mostrar Todos",
      value: "todo",
      key: 10
    },
    {
      nombre: "D&D5e",
      value: "D&D5e",
      key: 11
    },
    {
      nombre: "Blood and Honor",
      value: "Blood and Honor",
      key: 12
    },
    {
      nombre: "Naruto d10",
      value: "Naruto d10",
      key: 13
    }
  ];


  const [pjFiltSis, setpjFiltSis] = useState(listaPersonajes);

  const filterDyd = (sistemaEnv) => {
    let pjFiltSis = listaPersonajes.filter(personaje => personaje.sistema === sistemaEnv)
    return pjFiltSis;
  }

  function handlePersonaje(e) {
    let tipoPersonaje = e.target.value;
    tipoPersonaje !== "todo" ? setpjFiltSis(filterDyd(tipoPersonaje)) : setpjFiltSis(listaPersonajes)
  }

  return (
    <>
      <section className='cuerpoPrin'>
        <div className='intro'>
          <p>Dentro de esta sección podrás encontrar algunos ejemplos de personajes de rol, en qué sistema fueron creados, y algo de información sobre ese personaje.</p>
        </div>
        <>
        <h2 className='encaFiltro'>Filtrar por Sistema</h2>
          {botones && botones.map((type) => (
            <>
              <button className='botonFiltro' key={type.key} value={type.value} onClick={handlePersonaje}>
                {type.nombre}
              </button>
            </>
          ))}
          {pjFiltSis && pjFiltSis.map(type => (
            <div key={type.key}>
              <Carta nombre={type.nombre}
                clase={type.clase}
                sistema={type.sistema}
                info={type.info}
                key={type.key} />
            </div>
          ))}
        </>
      </section>
    </>
  )
}