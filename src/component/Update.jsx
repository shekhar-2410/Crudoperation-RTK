import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../store/slice";
import { useNavigate } from "react-router-dom";
const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const filterData = users.filter((data) => data.id == id);
  const { name, email } = filterData[0];
  const [existname, setExistName] = useState(name);
  const [existemail, setExistEmail] = useState(email);

  // const [user, selectedUser] = useState(null);
  // useEffect(() => {
  //   // Filter the user based on the id and set it in the state
  //   const filteredUser = users.find((data) => data.id === parseInt(id));
  //   if (filteredUser) {
  //     selectedUser(filteredUser);
  //   } else {
  //     console.error(`User with id ${id} not found.`);
  //   }
  // }, [id, users]);
  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: existname,
        email: existemail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-60 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5 shadow">
        <h3>Update User</h3>
        <form onSubmit={updateHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={existname}
              onChange={(e) => {
                setExistName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={existemail}
              onChange={(e) => {
                setExistEmail(e.target.value);
              }}
            />
          </div>
          <br />
          <button className="btn btn-info" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
