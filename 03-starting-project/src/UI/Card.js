import { useState, React } from 'react';
import InputForm from '../components/InputForm';
import UserList from '../components/UserList';

const Card = () => {
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [userInfoList, setUserInfoList] = useState([]);

    const onAddNewUser = () => {
        setUserInfoList((prevUserInfoList) => {
            return [{'age': age, 'username': username}, ...prevUserInfoList];
        });
    }

    return (
        <div>
            <InputForm setAge={setAge} setUsername={setUsername} onAddNewUser={onAddNewUser}/>
            <h3>
                {`In Card.js: \n age: ${age} \n username: ${username}`}
            </h3>
            <UserList userInfoList={userInfoList}/>
        </div>
    );
};

export default Card;