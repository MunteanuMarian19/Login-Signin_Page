import React from "react";
import Form from "./Form";

var userIsRegistered = false;
//changing "userIsRegistered" to true or false render the "login" or "signIn" page

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
