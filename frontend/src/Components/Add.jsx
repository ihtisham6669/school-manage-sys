import axios from "axios";
import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import { PiStudentBold } from "react-icons/pi";

const Add = () => {
  const [resStatus, setresStatus] = useState(false);
  const [resData, setResData] = useState([]);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });
  const [data, setData] = useState({
    name: "",
    course: "",
    joindate: "",
    fee: "",
  });

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all")
      .then((res) => {
        setResData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = data;

    axios
      .post("http://127.0.0.1:8000/add", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setresStatus(true);
        setAlert({ type: "alert-success", message: res.data.message });
      })
      .catch((e) => {
        setresStatus(true);
        setAlert({
          type: "alert-error",
          message: "Ooopsss!! Sorry An Error Occured",
        });
      });
  };
  return (
    <section className="max-w-4xl p-6 mx-auto bg-gray-700 rounded-md shadow-md  ">
      <Alert type={alert.type} message={alert.message} status={resStatus} />
      <h2 className="text-lg font-semibold text-center italic underline  capitalize ">
        Add A New Student
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col items-start flex-wrap gap-6 ">
          <div className="w-full">
            <label
              className="text-cyan-500 font-medium text-lg "
              htmlFor="name"
            >
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
            <label className="text-cyan-500 font-medium text-lg " htmlFor="fee">
              Fee
            </label>
            <input
              id="fee"
              type="text"
              onChange={(e) => {
                setData({ ...data, fee: e.target.value });
              }}
              placeholder="Enter Student Fee"
              className="block w-full px-4 py-2 mt-2 bg-gray-700 border border-sky-500 rounded-md       focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40   focus:outline-none focus:ring"
            />
          </div>

          <div className="w-full">
            <label
              className="text-cyan-500 font-medium text-lg  "
              htmlFor="course"
            >
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
            <label
              className="text-cyan-500 font-medium text-lg  "
              htmlFor="joindate"
            >
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
          <button  className={`px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm  rounded-md hover:bg-sky-600 bg-sky-700`}>
            <div className="flex items-center gap-2 ">
              <PiStudentBold className="text-xl"/>  Add the Student
            </div>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Add;
