import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.vertex6_logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>At Vertex Multispeciality Hospital, we are committed to delivering exceptional healthcare with patient first approach. Established in 2025  and NABH accredited, Vertex  Multispeciality Hospital in Ballia offers conulation with doctors and round the clock 24x7 emergency care.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>05491-223455</li>
            <li>1800 2000 00</li>
            <li>info@vertexhospital.com </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ Vertexhospital.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
