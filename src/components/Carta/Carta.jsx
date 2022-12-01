import React from 'react'
import './Carta.css'

export default function Carta({ nombre, clase, sistema, info }) {
    return (
        <section className='contCarta'>
            <div className='cuerpoCarta'>
                <h3>{nombre}</h3>
                <p>{clase}</p>
                <p>Sistema:{sistema}</p>
                <p>{info}</p>
            </div>
        </section>
    )
}
