import React from 'react'

const Modal = ({title,isClose,isOpen,children}) => {
    if(!isOpen) return null
  return (
    <div className="fixed inset-0 bg-black opacity-88 flex justify-center items-center z-90">
        <div className="bg-white shadow-lg w-full max-w-lg mx-4 rounded-lg">
            <div className='flex justify-between items-center px-6 py-4 border-b border-black  '>
                <h2 className="text-xl text-black  font-semibold">{title}</h2>
                <button className=" text-2xl text-black" onClick={isClose}>
                    &times;
                </button>
            </div>
            <div className={`p-6`}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal