import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteForever, MdOutlineMode } from "react-icons/md";
import Alert from "./Alert";

const Home = () => {
  const [resStatus,setresStatus]=useState('noRes')
  const [alert,setAlert]=useState({
    type:'',
    message:''
  })
  const [data, setData] = useState([]);
  const [uid, setId] = useState({ id: "" });
  const deleteStd = (e) => {
    console.log(e.currentTarget.value);
    const UID = { id: e.currentTarget.value };
    setId(UID);
    axios
      .post("http://127.0.0.1:8000/delete", UID, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setresStatus('success');
        console.log(res.data.message)
        setAlert({type:'alert-success',message:'Student Deleted Successfully'})
      })
      .catch((e) => {
        setresStatus('fail')
        setAlert({type:'alert-error',message:'Ooopsss!! Sorry An Error Occured'})
      });
  };
  const updateStd = (e) => {
    console.log("Update Student Function Not Developed");
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
          {data.map((obj) => (
            <tr key={obj.id}>
              <th>{obj.id}</th>
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
                <button
                  type="submit"
                  value={obj.id}
                  onClick={updateStd}
                  className="text-xl text-sky-500 border-2 rounded-full border-sky-600 p-1"
                >
                  <MdOutlineMode />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
