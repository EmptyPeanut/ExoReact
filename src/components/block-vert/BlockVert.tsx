import React from 'react'
import './style.css';
import { BlockVertData } from '../../models/block-vert/BlockVertData';

export type blockVertData = {
    data: BlockVertData 
}
const BlockVert: React.FC<blockVertData> = ({data}) => {
  return (
    <div className='block-vert-container'>
        <div className='block-vert-content'>
            <h1>{data.title}</h1>
            <div className='img-container'>
                <img src={data.image} alt={data.image + ' image'} />
                <div className='promo-container'>
                    <span>{data.previous_price}€</span>
                    <span>{data.price}€</span>
                    <span>{data.name}</span>
                    <span>{data.sex}</span>
                </div>
                <div className='description-container'>
                    <span>{data.description.first_line}</span>
                    <span>{data.description.second_line}</span>
                    <button><a>{data.description.cta} &gt;</a></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlockVert