import axios from "axios";
import React, { useEffect, useState } from "react";

const Apiaxios = () => {
  const [userid, setUserid] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    getdate();
  }, []);

  async function getdate() {
    await axios
      .get(url)
      .then((response) => {
        return response;
      })
      .then((date) => {
        setUserid(date.data);
        console.log(date.data);
      });
  }

  const heandlsubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        id: id,
        name: name,
        username: username,
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((date) => {
        setUserid(date.data, ...userid);
        console.log(date.data);
      })
      .catch((error) => alert(error));

    setId("");
    setName("");
    setUsername("");
  };

  return (
    <div>
      <center>
        <form onSubmit={heandlsubmit}>
          <table>
            <tr>
              <th>ID :</th>
              <td>
                <input
                  value={id}
                  type="text"
                  className="form-control"
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>NAME :</th>
              <td>
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>username :</th>
              <td>
                <input
                  value={username}
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colspan="2" className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </td>
            </tr>
          </table>
        </form>
      </center>
      <table className="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>DELETE</th>
        </thead>
        <tbody>
          {userid.map((item) => (
            <tr>
              <td key={item.id}>{item.id}</td>
              <td key={item.name}>{item.name}</td>
              <td key={item.username}>{item.username}</td>
              <td>
                <button>DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Apiaxios;
