import React from 'react'
import BlockVert from '../components/block-vert/BlockVert';
import TripleBlock from '../components/triple-block/TripleBlock';
import { BlockData } from '../models/triple-block/BlockData';
import { BlockVertData } from '../models/block-vert/BlockVertData';
import ReassuranceList from '../components/reassurance-list/ReassuranceList';
import { ReassuranceData } from '../models/reassurance/ReassuranceData';

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

const reassuranceData: ReassuranceData[] = [
  {
    'logo': '',
    'title': 'Click & Collect',
    'description': '"Trop pratique la e-réservation, merci pour ce service!!!"',
    'date': '26/04/2023'
  },
  {
    'logo': '',
    'title': 'Paiement sécurisé',
    'description': '"Merci beaucoup de votre système de payement en plusieurs fois qui facilite surtout quand il y a plusieurs enfants"',
    'date': '14/12/2022'
  },
  {
    'logo': '',
    'title': 'Livraison',
    'description': '"Trop pratique la e-réservation, merci pour ce service!!!"',
    'date': '26/04/2023'
  },
  {
    'logo': '',
    'title': 'Retour facile',
    'description': '"Trop pratique la e-réservation, merci pour ce service!!!"',
    'date': '26/04/2023'
  },
]
const HomePage = () => {
  return (
    <>
    <BlockVert data={blockVertData}/>
    <TripleBlock data={tripleBlockData}/>
    <ReassuranceList data={reassuranceData}/>
    </>
  )
}

export default HomePage