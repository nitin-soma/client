import React, { useState } from "react";
import axios from "axios";
import "./ActorForm.css";

function MyComponent() {
  const [actorName, setActorName] = useState("");
  const [show, setShow] = useState("");
  const [mainLead, setMainLead] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/actor", {
        name: actorName,
        show: show,
        main_lead: mainLead,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container">
        <label>
          Actor Name:
          <input
            className="input-field"
            type="text"
            value={actorName}
            onChange={(e) => setActorName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Show:
          <input
            type="text"
            value={show}
            onChange={(e) => setShow(e.target.value)}
          />
        </label>
        <br />
        <label>
          Main Lead:
          <input
            className="checkbox"
            type="checkbox"
            checked={mainLead}
            onChange={(e) => setMainLead(e.target.checked)}
          />
        </label>
        <br />
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyComponent;
