import React from 'react'
import BlockVert from '../components/block-vert/BlockVert';

let blockVertData =
  {
    'title': 'Toujours plus pour les familles',
    'image': 'https://www.previssima.fr/files/previssima/images_redacteurs/dossiers2017/allocations-familiale.jpg',
    'previous_price': 15,
    'price': 10,
    'name': 'La robe courte',
    'sex': 'femme',
    'description': {
      'first_line': 'Le temps des robes !',
      'second_line': 'disponibles jusqu\'au 4XL', 
      'cta': 'Les robes',
    },   
  }
const HomePage = () => {
  return (
    <>
    <BlockVert data={blockVertData}/>
    </>
  )
}

export default HomePage