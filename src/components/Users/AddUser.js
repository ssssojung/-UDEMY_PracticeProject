import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button"
import Wrapper from "../Helpers/Wrapper";
import ErrorModal from '../UI/ErrorModal';
import classes from "./AddUser.module.css";

function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({
               title: 'Invalid input',
               message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        };
        if(+enteredAge < 1){
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age(> 0).'
             });
            return;
        }
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    };
    const errorHandler = (event) => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        value={enteredUserName} 
                        type="text" 
                        onChange={usernameChangeHandler} 
                    />
                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        value={enteredAge} 
                        type="number" 
                        onChange={ageChangeHandler}
                    />
                    <Button type="submit">Add User</Button>
                </form>
                
            </Card>
        </Wrapper>
        
    );
};

export default AddUser;