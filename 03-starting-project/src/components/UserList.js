import { React } from 'react';
import User from './User';
import styles from './UserList.module.css'; 

const UserList = (props) => {
    return (
        <div className={styles.userList}>
            {props.userInfoList.map((userInfo) => (
                <User
                    key={Math.random().toString()} 
                    username={userInfo['username']}
                    age={userInfo['age']}
                />
            ))}
        </div>
    );
};

export default UserList;