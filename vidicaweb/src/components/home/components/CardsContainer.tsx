import React from 'react'
import Current from './Current'
import TotalAtm from './TotalAtm'

function CardsContainer() {
  return (
    <div className='flex flex-row'>
        {/* <TotalAtm/> */}
        <Current text={"En este momento"}/>
        <Current text={"Todo El día"} />

    </div>
  )
}

export default CardsContainer