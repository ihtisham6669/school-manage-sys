import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever, MdOutlineMode } from "react-icons/md";
import Alert from "./Alert";
import {Link} from 'react-router-dom'
const Home = () => {
  const [resStatus,setresStatus]=useState(false)
  const [alert,setAlert]=useState({
    type:'',
    message:''
  })
  const [data, setData] = useState([]);
  const [uid, setId] = useState({ id: "" });
  const deleteStd = (e) => {
    const isConfirmed = confirm("Are you sure to proceed?");
    if (isConfirmed) {
      const UID = { id: e.currentTarget.value };
      setId(UID);
      axios
        .post("http://127.0.0.1:8000/delete", UID, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          setresStatus(true);
          console.log(res.data.message)
          setAlert({type:'alert-success',message:'Student Deleted Successfully'})
        })
        .catch((e) => {
          setresStatus(true)
          setAlert({type:'alert-error',message:'Ooopsss!! Sorry An Error Occured'})
        });
    } else {
      console.log("User canceled.");
    }
   
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all")
      .then((res) => {
        setData(res.data)})
      .catch((err) => console.log(err));
  }, [uid]);
  return (
    <div className="overflow-x-auto ">
       <Alert type={alert.type} message={alert.message} status={resStatus}/>
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
          {data.map((obj,index) => (
            <tr key={obj.id}>
              <th>{index+1}</th>
              <td>{obj.name}</td>
              <td>{obj.course}</td>
              <td>{obj.joindate}</td>
              <td className="flex items-center justify-evenly">
                <button
                  value={obj.id}
                  type="submit"
                  draggable="true"
                  onClick={deleteStd}
                  className="text-xl text-red-500 border-2 rounded-full border-red-600 p-1  hover:border-pink-600 hover:text-[#E8BEAC] duration-500 ease-out"
                >
                  <MdDeleteForever />
                </button>
                <Link
                  to={`/edit-student/${obj.id}`}
                  className="text-xl text-sky-500 border-2 rounded-full border-sky-600 p-1"
                >
                  <MdOutlineMode />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home