import { React } from 'react';
import User from './User';

const UserList = (props) => {
    return (
        <div>
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