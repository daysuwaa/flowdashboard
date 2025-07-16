import React from 'react'
import Images_titles from './Images_titles'
import BalancePage from '../balance/Balance'

const Qt = () => {
  return (
    <div className='mt-6'>
    <div className="grid xl:grid-cols-2 gap-3 h-full">
  <Images_titles />
  <BalancePage />
</div>
    </div>
  )
}

export default Qt