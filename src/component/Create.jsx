import React, { useState } from "react";
import { addUser } from "../store/slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Create = () => {
  // Define state to store form input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Function to handle form submission
  const userHandler = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }));
    navigate("/");

    // Reset the form fields
    setName("");
    setEmail("");
  };

  return (
    <div className="d-flex w-100 vh-60 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5 shadow">
        <h3>Add New User</h3>
        <form onSubmit={userHandler}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              required
              type="text"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update 'name' state
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update 'email' state
              required
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

export default Create;
