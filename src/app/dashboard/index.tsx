import React from 'react'
// import Headings from './Headings'
import Card from '../components/Cards'
import Qt from './QuickTransfer'
import MiddleCharts from '../components/Charts/MiddleCharts'

const page = () => {
  return (
    <div>
      <Card/>
      <MiddleCharts/>
      <Qt/>

    </div>
  )
}

export default page