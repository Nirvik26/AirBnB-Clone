import React from 'react'
import home from "../images/home.png"
import camping from "../images/tent.png"
import peak from "../images/peak.png"
import view from "../images/theatre-stage.png"
import container from "../images/container.png"
import cabin from "../images/cabin.png"
import room from "../images/hotel.png"
import ski from "../images/ski.png"

interface menuProps {
  setMenu?: any;
}

export default function Menubar(props:menuProps) {
  return (
    <div className='flex pt-8 cursor-pointer '>
      <div onClick={()=> props.setMenu("House")} className='ml-11 cursor-pointer'>
        <img src={home} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>House</h1>
      </div>
      <div onClick={()=> props.setMenu("Room")} className='ml-11 cursor-pointer'>
        <img src={camping} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Room</h1>
      </div>
      <div onClick={()=> props.setMenu("Hostel")} className='ml-11 cursor-pointer'>
        <img src={peak} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Hostel</h1>
      </div>
      <div onClick={()=> props.setMenu("Hotel")} className='ml-11 cursor-pointer'>
        <img src={view} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Hotel</h1>
      </div>
      <div onClick={()=> props.setMenu("Studio")} className='ml-11 cursor-pointer'>
        <img src={container} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Studio</h1>
      </div>
      <div onClick={()=> props.setMenu("Townhouse")} className='ml-11 cursor-pointer'>
        <img src={cabin} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Townhouse</h1>
      </div>
      <div onClick={()=> props.setMenu("Apartment")} className='ml-11 cursor-pointer'>
        <img src={room} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>Apartment</h1>
      </div>
      <div onClick={()=> props.setMenu("View")} className='ml-11 cursor-pointer'>
        <img src={ski} className='w-6 h-6' alt="" />
        <h1 className='text-xs font-semibold hover:underline'>View</h1>
      </div>
    </div>
  )
}
