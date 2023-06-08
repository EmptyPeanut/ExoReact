import React from 'react'
import { BlockData } from '../../models/triple-block/TripleBlockData'
import Block from './Block'
import './style.css';

type blockData = {
  data: BlockData[]
}
const TripleBlock: React.FC<blockData> = ({data}) => { 
  return (
    <div className='triple-block-container'>
    {data.map((block) => {
      return <Block data={block}/>
    })}
    </div>
  )
}

export default TripleBlock