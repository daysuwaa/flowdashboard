import React from 'react'
import Card from '../components/Cards'
import QuickTransfer from './Transfer/index'
import MiddleCharts from '../components/Charts/MiddleChart'

const page = () => {
  return (
    <div className=''>
      <Card/>
      <MiddleCharts/>
      <QuickTransfer/>

    </div>
  )
}

export default page