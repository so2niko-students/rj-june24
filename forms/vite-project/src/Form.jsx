import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onInpChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log("user", user);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={user?.name}
          onChange={onInpChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user?.email}
          onChange={onInpChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user?.password}
          onChange={onInpChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
