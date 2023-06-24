import React from 'react'

function ButtonAngka({ name, nameFunct, angka }) {

    return (
        <button
            name={name}
            onClick={nameFunct}
            className=' bg-[#262834] hover:bg-[#264040] duration-300 w-[60px] h-[40px] rounded-md font-bold text-2xl'>
            {angka}
        </button>
    )
}

export default ButtonAngka