import React from 'react'
import './Donde.css'
import haedo from './haedo.png'
import moron from './moron.png'

export default function Lugares() {
  return (
    <section className='cuerpoPrin'>
      <h1 className='encPrin'>Lugares para ir a jugar rol en Buenos Aires</h1>
      <div className='conteneDonde'>
        <h2 className='segEnc'>Zona Oeste:</h2>
        <h3 className='terEnc'>Oeste Juega: Morón</h3>
        <p>Rivadavia 18356, Morón-Centro Cultural y Político Cata Guagnini</p>
        <div className='cajaLugar'>
          <img src={moron} alt="moron" />
        </div>
        <h3 className='terEnc'>Oeste Juega: Haedo</h3>
        <p>Tacuarí 674,Haedo-Biblioteca Popular de Haedo</p>
        <div className='cajaLugar'>
          <img src={haedo} alt="haedo" />
        </div>
      </div>
    </section>
  )
}
