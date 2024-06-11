import React from 'react'
import { MdOutlineReportGmailerrorred,  } from "react-icons/md";

const Alert = ({alert,status}) => {
  return (
    <section className={`${status==='noRes'?'-translate-y-full duration-300 ease-out':'translate-y-0 ease-in duration-300'} flex flex-col justify-center items-center p-4 rounded-xl absolute top-0 w-full h-screen left-0 bg-sky-950/30 backdrop-blur-md`}>

    <div role="alert" className={`alert alert-${alert.type}`}>
  {alert.type==='success'&& <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
  {alert.type==='error'&&  <MdOutlineReportGmailerrorred className='text-2xl' />}
  <span>{alert.message}</span>

</div>
<div className='flex gap-4 my-4'>
    
  <a href={'/'} className='rounded-lg hover:bg-gray-200 hover:text-sky-800 transition duration-500 font-medium text-gray-200 bg-sky-800 py-2 px-6'>Home</a>
  <a href={'/add-student'} className='rounded-lg hover:bg-gray-200 hover:text-sky-800 transition duration-500 font-medium text-gray-200 bg-sky-800 px-6 py-2'>Add Student</a>
  <a href={'/'} className='rounded-lg hover:bg-gray-200 hover:text-sky-800 transition duration-500 font-medium text-gray-200 bg-sky-800 px-6 py-2'>Delete Student</a>
</div>
    </section>

  )
}

export default Alert