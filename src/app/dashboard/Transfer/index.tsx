import React from 'react'
import Personnels from './Personnels'
import BalancePage from '../Balance/Balance'

const index = () => {
  return (
    <div className='mt-6'>
    <div className="grid xl:grid-cols-3 gap-10 h-full">
  <Personnels />
  <BalancePage />
</div>
    </div>
  )
}

export default index