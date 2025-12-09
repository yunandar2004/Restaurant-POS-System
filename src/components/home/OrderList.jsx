import React from 'react'
import { FaCircle } from 'react-icons/fa'
import { FaCheckDouble } from 'react-icons/fa6'

const OrderList = () => {
  return (
    <div className='' >
        <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-3">
                <p className="border bg-yellow-400 border-yellow-500 text-black p-1.5 rounded font-bold">AM</p>
            <div className="flex flex-col justify-between">
                <p className='font-bold text-white text-sm'>Amrit Raj</p>
                <p className="text-xs text-white">8 items</p>
            </div>

            </div>
            <div className="">
                <h1 className="border border-yellow-500 text-yellow-500 p-2 rounded text-xs">
                    Table No:3
                </h1>
            </div>
            <div className="">
                <p className="flex gap-2  items-center justify-center text-green-600 text-xs"> <FaCheckDouble className="text-green-600" />  Ready</p>
                <p className="flex gap-2 justify-center items-center text-xs text-white"><FaCircle className="text-green-600" />  Ready to Searve</p>
            </div>
        </div>
    </div>
  )
}

export default OrderList