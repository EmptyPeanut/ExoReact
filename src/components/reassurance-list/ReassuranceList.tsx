import React from 'react'
import { ReassuranceData } from '../../models/reassurance/ReassuranceData';
import Reassurance from './Reassurance';
import './style.css';

type reassurancesData = {
    data: ReassuranceData[];
}
const ReassuranceList: React.FC<reassurancesData> = ({data}) => {
  return (
    
    <div className='reassurance-container'>
        <h3>Les clients parlent de nos services</h3>
        <div className='reassurance-row'>
            {data.map((el) => {
                return <Reassurance data={el}/>
            })}
        </div>
        <span>* Source questionnaire post achat</span>
    </div>
  )
}

export default ReassuranceList