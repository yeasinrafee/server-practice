import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUser] = useState(loadedUsers);

  const handleDelete = (_id) => {
    console.log(_id);

    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted");
          const remaining = users.filter((user) => user._id !== _id);
          setUser(remaining);
        }
      });
  };
  return (
    <div>
      <h1>Users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}: {user.email}{" "}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
