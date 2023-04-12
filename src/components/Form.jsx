import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {/* checking the boolean value of isRegistered */}
      {/* is registered = true -> "password" else "Confirm password" */}

      {/* {props.isRegistered ? null : (<input type="password" placeholder="Confirm Password" />)} */}
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      {/* ternary operator: if the first is true (!props.isRegistered), the expression will be compiled */}

      <button type="submit">
        {props.isRegistred ? "Login" : "Register, please!"}
      </button>
    </form>
  );
}

export default Form;
