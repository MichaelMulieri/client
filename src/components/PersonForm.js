import { useState } from "react";
import axios from "axios";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/people", {
        firstName,
        lastName,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <p>
        <label>First Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        ></input>
      </p>
      <p>
        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        ></input>
      </p>
      <button>Submit</button>
    </form>
  );
};

export default PersonForm;
