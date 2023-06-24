import React, { useEffect, useState } from 'react'
import { ButtonAngka } from './components/buttonAngka'

function App() {

  useEffect(() => {
    setResult('')
  }, [])

  const [result, setResult] = useState('')

  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const handleClear = () => {
    setResult('')
  }

  const handleBackspace = () => {
    setResult(result.slice(0, -1))
  }

  const handleCalculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult('ERROR!')
    }
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center px-5 md:px-0'>
      <h1 className='mb-10 text-3xl font-bold'><span className='text-red-500 font-bold'>SET</span> KALKULATOR</h1>
      <div className='w-full md:w-[400px] h-[400px] bg-black p-8 rounded-md '>

        <div className='text-white text-right text-3xl font-bold'>{result || 0}</div>

        <div className='flex justify-between text-white mt-4'>

          <button
            id='clear'
            onClick={handleClear}
            className=' bg-red-600 w-[100px] h-[40px] rounded-md font-bold text-black'>Clear
          </button>

          <button
            id='backspace'
            onClick={handleBackspace}
            className=' bg-red-400 w-[80px] h-[40px] rounded-md font-bold text-black'>C
          </button>

          <button
            name='/'
            onClick={handleClick}
            className=' bg-blue-500 w-[60px] h-[40px] rounded-md font-bold text-2xl'>÷
          </button>
        </div>

        <div className='text-white flex justify-between mt-4'>
          <ButtonAngka
            name={'7'}
            angka={7}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'8'}
            angka={8}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'9'}
            angka={9}
            nameFunct={handleClick}
          />

          <button
            name='*'
            onClick={handleClick}
            className=' bg-blue-500 w-[60px] h-[40px] rounded-md font-bold text-2xl'>×
          </button>
        </div>

        <div className='text-white flex justify-between mt-4'>
          <ButtonAngka
            name={'4'}
            angka={4}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'5'}
            angka={5}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'6'}
            angka={6}
            nameFunct={handleClick}
          />
          <button
            name='-'
            onClick={handleClick}
            className=' bg-blue-500 w-[60px] h-[40px] rounded-md font-bold text-2xl'>-</button>
        </div>
        <div className='text-white flex justify-between mt-4'>
          <ButtonAngka
            name={'1'}
            angka={1}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'2'}
            angka={2}
            nameFunct={handleClick}
          />
          <ButtonAngka
            name={'3'}
            angka={3}
            nameFunct={handleClick}
          />
          <button
            name='+'
            onClick={handleClick}
            className=' bg-blue-500 w-[60px] h-[40px] rounded-md font-bold text-2xl'>+</button>
        </div>

        <div className='text-white flex justify-between mt-4'>
          <ButtonAngka
            name={'0'}
            angka={0}
            nameFunct={handleClick}
          />
          <button
            name='.'
            onClick={handleClick}
            className=' bg-blue-500 w-[60px] h-[40px] rounded-md font-bold text-2xl'>.</button>

          <button
            id='result'
            onClick={handleCalculate}
            className=' bg-green-500 w-[100px] h-[40px] rounded-md font-bold text-2xl text-black'>=</button>
        </div>
      </div>

    </div>
  )
}

export default App;