import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Apiaxios = () => {
  const [userid, setUserid] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const url = "https://jsonplaceholder.typicode.com/users";
  const [show, setShow] = useState(false);
  const [showAdd, setShowadd] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseAdd = () => setShowadd(false);
  const handleShowAdd = () => setShowadd(true);

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
        // console.log(date.data);
      });
  }

  const heandlsubmit = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        id,
        name,
        email,
      })
      .then((res) => {
        setUserid([...userid, res.data]);
        console.log(res);
      })
      .catch((error) => alert(error));

    setId("");
    setName("");
    setEmail("");
    handleCloseAdd();
  };

  const deletedata = (id) => {
    axios.delete(`${url}/${id}`);
    setUserid(
      userid.filter((items) => {
        return items.id !== id;
      })
    );
  };

  const putmathodapi = (e) => {
    e.preventDefault();
    axios
      .put(`${url}/${id}`, {
        id,
        name,
        email,
      })
      .then((res) => {
        setUserid([...userid, res.date]);
        console.log(res.date);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>Add</th>
          <th>Edit</th>
          <th>DELETE</th>
        </thead>
        <tbody>
          {/* {console.log(userid[0].email)} */}
          {userid.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <Button onClick={handleShowAdd}>Add</Button>
              </td>
              <td>
                <Button variant="success" onClick={handleShow}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => deletedata(item.id)}>
                  DELETE
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={putmathodapi}>
            <table>
              <tbody>
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
                  <th>email :</th>
                  <td>
                    <input
                      value={email}
                      type="text"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={heandlsubmit}>
            <table>
              <tbody>
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
                  <th>email :</th>
                  <td>
                    <input
                      value={email}
                      type="text"
                      className="form-control"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="text-center">
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAdd}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Apiaxios;
