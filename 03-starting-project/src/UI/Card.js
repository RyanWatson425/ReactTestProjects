import { useState, React } from 'react';
import InputForm from '../components/InputForm';
import UserList from '../components/UserList';
import styles from './Card.module.css';

const Card = () => {
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [userInfoList, setUserInfoList] = useState([]);
    const [error, setError] = useState();

    const onAddNewUser = () => {
        if (age.trim().length === 0 || username.trim().length === 0) {
            setError({title: 'Invalid Input', message: 'Please enter a valid name and age (non empty values)'});
            return;
        } else if (+age < 1) {
            setError({title: 'Invalid Age', message: 'Please enter a valid age'});
            return;
        }
        setUserInfoList((prevUserInfoList) => {
            return [{'age': age, 'username': username}, ...prevUserInfoList];
        });
    }
    //TODO: 
    //1) add css 
    //2) add ability to delete user entries on click
    //3) add validation to make sure you aren't submitting with nothing (and possibly validation that entry is a string/int)
    //4) reset the user input box once a submit has been done
    //5) learn how to make the error modal

    return (
        <div className={styles.card}>
            <InputForm setAge={setAge} setUsername={setUsername} onAddNewUser={onAddNewUser}/>
            <UserList error={error} userInfoList={userInfoList}/>
        </div>
    );
};

export default Card;