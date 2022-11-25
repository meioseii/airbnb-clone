import React from 'react'
import photogrid from '../public/assets/photo-grid.png'


function Hero() {
    return (
        <section>
            <img src={photogrid} className='photo-grid'></img>
            <h1 className='header1'>Online Experiences</h1>
            <p className='info'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero