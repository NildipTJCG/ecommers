import axios from "axios";
import React, { useEffect, useState } from "react";

const Apiaxios = () => {
  const [userid, setUserid] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        return response;
      })
      .then((date) => {
        setUserid(date.data);
        console.log(date.data);
      });
  }, [userid]);
  // console.log(userid);

  return (
    <div>
      <table className="table table-bordered table-spri">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>DELETE</th>
        </thead>
        {userid.map((item) => (
          <tbody>
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>
                <button>DELETE</button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Apiaxios;
