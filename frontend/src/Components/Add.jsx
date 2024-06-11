import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Alert from "./Alert";

const Add = () => {
  const [resStatus,setresStatus]=useState('noRes')
  const [alert,setAlert]=useState({
    type:'',
    message:''
  })
  
  const [data, setData] = useState({
    name: "",
    id: "",
    course: "",
    joindate: "",
    fee: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = data;

    axios
      .post("http://127.0.0.1:8000/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
        setresStatus('success');
        setAlert({type:'error',message:'Student Added Successfully'})
        console.log(res)
      }).catch((e) => {
        setresStatus('fail')
        setAlert({type:'error',message:'Ooopsss!! Sorry An Error Occured'})
      });
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-md  ">
      <Alert alert={alert} status={resStatus}/>
      <h2 className="text-lg font-semibold  capitalize ">
        Add A New Student
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col items-start flex-wrap gap-6">
          <div className="w-full">
            <label className="text-sky-700  " htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
              placeholder="Enter Student Name"
              className="block w-full px-4 py-2 mt-2 bg-gray-700 border border-sky-500 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
          <div className="w-full">
            <label className="text-sky-500 font-bold text-xl font-mono " htmlFor="fee">
              Fee
            </label>
            <input
              id="fee"
              type="text"
              onChange={(e) => {
                setData({ ...data, fee: e.target.value });
              }}
              placeholder="Enter Student Name"
              className="block w-full px-4 py-2 mt-2 bg-gray-700 border border-sky-500 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full">
            <label className="text-sky-700  " htmlFor="id">
              id
            </label>
            <input
              id="id"
              type="number"
              placeholder="Enter Unique ID"
              onChange={(e) => {
                setData({ ...data, id: e.target.value });
              }}
              className="block appearance-none w-full px-4 py-2 mt-2 bg-gray-700 border border-sky-500 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full" >
            <label className="text-sky-700  " htmlFor="course">
              Course
            </label>
            <input
              id="course"
              type="text"
              placeholder="Enter Course Name"
              onChange={(e) => {
                setData({ ...data, course: e.target.value });
              }}
              className="block w-full px-4 py-2 mt-2 bg-gray-700 border border-sky-500  rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full">
            <label className="text-sky-700  " htmlFor="joindate">
              Join Date
            </label>
            <input
              id="joindate"
              type="date"
              onChange={(e) => {
                setData({ ...data, joindate: e.target.value });
              }}
              className="block w-full px-4 py-2 mt-2 bg-gray-700   border border-sky-500 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-sky-700 rounded-md hover:bg-sky-600">
            Add Student
          </button>
        </div>
      </form>
    </section>
  );
};

export default Add;
