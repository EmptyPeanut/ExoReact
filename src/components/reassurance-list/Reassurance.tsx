import React from 'react'
import { ReassuranceData } from '../../models/reassurance/ReassuranceData'

type reassuranceData = {
    data: ReassuranceData;
}
const Reassurance: React.FC<reassuranceData> = ({data}) => {
  return (
    <div className='reassurance'>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <span><b>{data.date}</b></span>
    </div>
  )
}

export default Reassurance