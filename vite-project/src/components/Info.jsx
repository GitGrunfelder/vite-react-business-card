import React from 'react'
import headshot from '/uncompressed.jpg'


function Info() {
    return (
    <div className="info">
        <img src={headshot} alt='George' className='headshot' />
        <div className="infotext">  
            <h1>George Grunfelder</h1>
            <h3 className='title'>Web Developer</h3>
            <a href='https://gitgrunfelder.github.io/'>
                <p className='link'>Portfolio Site</p>
                </a>
            <div className='buttons'>
                <button className='email'>Email</button>    
                <button className='linkedin'>LinkedIn</button>
            </div>
        </div>
    </div>
  )
}

export default Info