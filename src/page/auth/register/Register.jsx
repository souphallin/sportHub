import React from 'react'

import Image from "/src/assets/registerPage/photo_2024-07-08_09-51-43.jpg";
import username_icon from '/src/assets/registerPage/username.png';
import email from '/src/assets/registerPage/email.png'
import show_pass from '/src/assets/registerPage/hidepassword.png'

export default function Register() {
  return (
    <div className="drop-shadow-sm border-2 ">
      <div className='flex flex-row my-10 mt-20 max-w-screen-md mx-auto items-center'>
        <img className='rounded-l-lg' src={Image} alt="" />

        <div className='flex flex-col text-center ml-8'>
          <div className="font-black text-3xl mb-4">ចុះឈ្មោះ</div>
          <hr />
          {['username', 'email', 'password', 'confirmPassword'].map((type, index) => (
            <div key={index} className='relative mb-6'>
              <div className='flex items-center justify-between w-full'>
                <input type={type === 'username' ? 'text' : type === 'email' ? 'email' : type === 'password' ? 'password' : 'password'} className="rounded-md flex-grow" placeholder={` ${type === 'username' ? 'នាមត្រកូល' : type === 'email' ? 'អ៊ីមែល' : type === 'password' ? 'ពាក្យសម្ងាត់' : 'បញ្ជាក់ពាក្យសម្ងាត់'}`} />
                <img className="absolute right-3 top-1/2 transform -translate-y-1/2 max-w-4" src={type === 'username' || type === 'email' ? type === 'username' ? username_icon : email : show_pass} alt="" />
              </div>
            </div>
          ))}
          <div className="mt-6">
            <button className="border-2 p-2 px-3 rounded-md bg-blue-950 text-white border-cyan-600 hover:bg-blue-900 active:bg-blue-950 focus:outline-none focus:ring-1 focus:ring-blue-500">បង្កើតគណនី</button>
          </div>
          <div className="mt-4">មានគណនីរួចហើយ? <span className='cursor-pointer text-sky-600 hover:underline-offset-1 active:underline-offset-1 focus:outline-none focus:ring-1 focus:ring-blue-500 underline'>ចូលគណនី</span></div>
        </div>
      </div>
    </div>


  )
}
