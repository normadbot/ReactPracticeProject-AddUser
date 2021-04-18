import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return 0;
    }
    if (+enteredUserAge < 1) {
      return;
    }

    props.onAddUser(enteredUserName,enteredUserAge);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const userNameChangeHandler = (events) => {
    setEnteredUserName(events.target.value);
  };

  const userAgeChangeHandler = (events) => {
    setEnteredUserAge(events.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          value={enteredUserAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
