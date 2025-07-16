import React from 'react'
import Headings from '../Headings'
import BalanceGraph from '../../components/Charts/BalanceGraph'

const BalancePage = () => {
  return (
    <div className='lg:col-span-2'>
         <Headings 
        headingText='Balance History'
        headingTextPosition='text-start'
        headingTextSize='text-[22px]'
        />
        <BalanceGraph/>
    </div>
  )
}

export default BalancePage