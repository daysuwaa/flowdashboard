import React from 'react'
import Card from '../components/Cards'
import Qt from './QuickTransfer/index'
import MiddleCharts from '../components/Charts/MiddleChart'

const page = () => {
  return (
    <div className=''>
      <Card/>
      <MiddleCharts/>
      <Qt/>

    </div>
  )
}

export default page