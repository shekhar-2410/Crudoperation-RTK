import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store/slice";
const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  const deleteHandler = (id) => {
    dispatch(deleteUser({ id: id }));
    alert("Are you sure want to delete this id");
  };
  return (
    <div className="container">
      <h2>Crud App with JSON Server</h2>
      <Link to={"/create"}>
        <button className="btn btn-success my-3">Create +</button>
      </Link>
      <table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {" "}
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary "
                >
                  Edit
                </Link>
                <button
                  onClick={() => {
                    deleteHandler(user.id);
                  }}
                  className="btn btn-sm btn-danger ms-3"
                >
                  Delete
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
