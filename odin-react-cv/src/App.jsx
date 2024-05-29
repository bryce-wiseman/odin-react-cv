import { useState } from 'react'
import Header from './Header.jsx'
import Info from './Info.jsx'
import Display from './Display.jsx'


function App() {

  return (
    <>
      <Header />
      <div className='main'>
        <Info />
        <Display />
      </div>
    </>
  )
}

export default App
