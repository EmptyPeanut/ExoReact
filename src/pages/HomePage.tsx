import React from 'react'
import BlockVert from '../components/block-vert/BlockVert';
import TripleBlock from '../components/triple-block/TripleBlock';
import { BlockData } from '../models/triple-block/TripleBlockData';
import { BlockVertData } from '../models/block-vert/BlockVertData';

const blockVertData: BlockVertData =
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

const tripleBlockData: BlockData[] = [
  {
    'image': 'https://cdn.def-shop.com/cdn-cgi/image/w=676,q=85,f=auto/pic1300x1725/merchcode-t-shirt-noir-337934__2.jpg',
    'name': 'Kiabi x Dans les dents',
    'description': 'Des motifs amusants, poétiques et colorés',
    'cta': 'Je découvre'
  },
  {
    'image': 'https://cdn.def-shop.com/cdn-cgi/image/w=676,q=85,f=auto/pic1300x1725/merchcode-t-shirt-noir-337934__2.jpg',
    'name': 'La tendance wax',
    'description': 'Farniente, soleil et motifs d\'inspiration africaine !',
    'cta': 'La collection'
  },
  {
    'image': 'https://cdn.def-shop.com/cdn-cgi/image/w=676,q=85,f=auto/pic1300x1725/merchcode-t-shirt-noir-337934__2.jpg',
    'name': 'Fête des pères',
    'description': 'Découvrez la collection',
    'cta': 'Je shoppe'
  },
]
const HomePage = () => {
  return (
    <>
    <BlockVert data={blockVertData}/>
    <TripleBlock data={tripleBlockData}/>
    </>
  )
}

export default HomePage