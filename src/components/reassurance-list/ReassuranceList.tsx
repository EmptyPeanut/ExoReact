import React from 'react'
import { ReassuranceData } from '../../models/reassurance/ReassuranceData';

type reassurancesData = {
    data: ReassuranceData[];
}
const ReassuranceList: React.FC<reassurancesData> = ({data}) => {
  return (
    <div>ReassuranceList</div>
  )
}

export default ReassuranceList