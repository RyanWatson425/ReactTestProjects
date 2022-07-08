import { React } from "react";
import styles from './InputForm.module.css';

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
    <div className={styles.inputForm}>
      <form onSubmit={onSubmitHandler}>
        <div className={styles.formControl}>
        Username
        <input onChange={usernameInputChangeHandler}></input>
        Age(Years)
        <input onChange={ageInputChangeHandler}></input>
        </div>
        <div>
          <button className={styles.button} type='submit'>Add User</button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
