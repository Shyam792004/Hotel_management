import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./dashboard.css";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Initialize state with four users
    const sampleUsers = [
      {
        id: 1,
        username: "user1",
        email: "user1@example.com",
        password: "pass1",
      },
      {
        id: 2,
        username: "user2",
        email: "user2@example.com",
        password: "pass2",
      },
      {
        id: 3,
        username: "user3",
        email: "user3@example.com",
        password: "pass3",
      },
      {
        id: 4,
        username: "user4",
        email: "user4@example.com",
        password: "pass4",
      },
    ];
    setUsers(sampleUsers);
  }, []);

  const deleteUser = (id) => {
    console.log(`Delete user with ID: ${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="user-container">
        <h1>Dashboard</h1>
        <Sidebar />
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>

                  <td>
                    <Link
                      to={`/edituser/${user.id}`}
                      className="btn btn-outline-primary mx-2"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn-delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
