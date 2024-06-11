import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever ,MdOutlineMode } from "react-icons/md";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/view")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

      console.log(data)
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Course</th>
            <th>Join Date</th>
            <th className="text-center">Manage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((obj) => (
            <tr key={obj.id}>
              <th>{obj.id}</th>
              <td>{obj.name}</td>
              <td>{obj.course}</td>
              <td>{obj.joindate}</td>
              <td className="flex items-center justify-evenly">
                <button value={obj.id}  onClick={(e)=>console.log(e.target.value)} className="text-xl text-red-500 border-2 rounded-full border-red-600 p-1  hover:border-pink-600 hover:text-[#E8BEAC] duration-500 ease-out"><MdDeleteForever /></button>
                <button value={obj.id} onClick={(e)=>console.log(e.target.value)} className="text-xl text-sky-500 border-2 rounded-full border-sky-600 p-1"><MdOutlineMode /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
