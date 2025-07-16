import React from 'react'
import Headings from '../Headings'
import BalanceGraph from '../../components/Charts/BalanceGraph'

const BalancePage = () => {
  return (
    <div>
         <Headings 
        headingText='Balance History'
        headingTextPosition='text-start'
        headingTextSize='text-2xl'
        />
        <BalanceGraph/>
    </div>
  )
}

export default BalancePage