import React from 'react'

const App = () => {
  return (
    <div className='App mx-auto mt-10 font-raleway text-3xl  text-white flex flex-col px-6 justify-center'>
      <h1 className='mb-4'>Magic Match</h1>
      <div className="flex justify-center items-center">
        <button className=' bg-transparent border-2 border-white px-2 py-1 rounded-lg text-white font-bold cursor-pointer text-xs'>New Game</button>
      </div>
    </div>
  )
}

export default App