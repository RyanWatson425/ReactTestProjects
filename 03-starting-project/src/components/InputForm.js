import { React } from "react";

const InputForm = (props) => {
    const usernameInputChangeHandler = (event) => {
        props.setUsername(event.target.value);
    }

    const ageInputChangeHandler = (event) => {
        props.setAge(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.onAddNewUser();
    }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <h2>Username:</h2>
        <input onChange={usernameInputChangeHandler}></input>
        <h2>Age(Years):</h2>
        <input onChange={ageInputChangeHandler}></input>
        <button type='submit'>Add User</button>
      </form>
    </div>
  );
};

export default InputForm;
