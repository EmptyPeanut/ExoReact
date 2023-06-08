import React from 'react'
import { BlockData } from '../../models/triple-block/BlockData'

export type tripleBlockData = {
    data: BlockData
}
const Block: React.FC<tripleBlockData> = ({data}) => {
  return (
    <div className='triple-block-block'>
      <img src={data.image} alt={data.image + 'image'} />
      <h3>{data.name}</h3>
      <span>{data.description}</span>
      <button className='cta-button'><a href='#'>{data.cta} &gt;</a></button>
    </div>
  )
}

export default Block