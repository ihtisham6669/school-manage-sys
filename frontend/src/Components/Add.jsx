import axios from 'axios';
import React,{useEffect, useState} from 'react'

const Add = () => {
  const [csrftoken, setCsrfToken] = useState('');
  useEffect(()=>{
    console.log('useeffect console',getCookie('csrftoken'))
  },[csrftoken])
  function getCookie(name) {
    let cookieValue = '';
    if (document.cookie && document.cookie !== '') {
      console.log(document.cookie)
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  
const [data,setData]=useState({
  name:"",
  id:"",
  course:"",
  joindate:"",
})

    const handleSubmit= async (e)=>{
      e.preventDefault();
      const formData = data
      const token = getCookie('csrftoken');
      setCsrfToken(token);
      console.log("CSRF Token SUbmit:", token)
      console.log(formData)
      console.log(csrftoken)
      
        axios.post("http://127.0.0.1:8000/",formData,{ headers:
          {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          }
        },).then((res)=>console.log(res)).catch(e=>{console.log(e)})
    }
  return (
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md  ">
    <h2 className="text-lg font-semibold text-gray-700 capitalize ">Add A New Student</h2>

    <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700  " htmlFor="name">Name</label>
                <input id="name" type="text" onChange={(e)=>{setData({...data,name:e.target.value})}} placeholder='Enter Student Name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700  " htmlFor="id">id</label>
                <input id="id" type="number" placeholder='Enter Unique ID' onChange={(e)=>{setData({...data,id:e.target.value})}} className="block appearance-none w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700  " htmlFor="course">Course</label>
                <input id="course" type="text" placeholder='Enter Course Name' onChange={(e)=>{setData({...data,course:e.target.value})}} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700  "  htmlFor="joindate">Join Date</label>
                <input id="joindate" type="date" onChange={(e)=>{setData({...data,joindate:e.target.value})}} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"/>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>
  )
}

export default Add
