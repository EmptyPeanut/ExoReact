import React from 'react'
import './style.css';


const BlockVert = () => {
  return (
    <div className='block-vert-container'>
        <div className='block-vert-content'>
            <h1>Toujours plus pour les familles</h1>
            <div className='img-container'>
                <img src="https://www.previssima.fr/files/previssima/images_redacteurs/dossiers2017/allocations-familiale.jpg" alt="" />
                <div className='promo-container'>
                    <span>15€</span>
                    <span>10€</span>
                    <span>La robe courte femme</span>
                </div>
                <div className='description-container'>
                    <span>Le temps des robes !</span>
                    <span>disponibles jusqu'au 4XL</span>
                    <button><a>Les robes &gt;</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlockVert