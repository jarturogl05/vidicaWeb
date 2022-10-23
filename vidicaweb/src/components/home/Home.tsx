import React from 'react'
import HeaderBar from '../headerBar/HeaderBar'
import NavigationBar from '../navigationBar/NavigationBar'

function Home() {
  return (
    <div className='w-screen h-screen overflow-hidden flex flex-row' >
        <NavigationBar/>
        <div className='flex flex-col w-screen'>
            <HeaderBar/>

        </div>
    </div>
  )
}

export default Home