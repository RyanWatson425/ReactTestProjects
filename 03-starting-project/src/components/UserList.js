import { React } from "react";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    // <div className={styles.userList}>
    <ul className={styles.userList}>
      {props.userInfoList.map((userInfo) => (
        <li>
          <User
            error={props.error}
            key={Math.random().toString()}
            username={userInfo["username"]}
            age={userInfo["age"]}
          />
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default UserList;
