import React, { useState, useEffect } from 'react';
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
   getAllUser();
  }, []);

  const getAllUser = async() => {
    try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    }catch(e) {
        console.log("Lỗi connect API");
    }
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
