import { React } from "react";
import styles from "./User.module.css";
import ErrorModal from "../UI/ErrorModal";

const User = (props) => {
  return (
    <div>
      {props.error && <ErrorModal title={props.error.title} message={props.error.message} />}
      <div className={styles.user}>
        {`${props.username} (${props.age} years old)`}
      </div>
    </div>
  );
};

export default User;
