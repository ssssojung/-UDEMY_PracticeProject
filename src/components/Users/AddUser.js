import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button"
import classes from "./AddUser.module.css";

function AddUser(props) {
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            return;
        };
        if(+enteredAge < 1){
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

    return (
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
    );
};

export default AddUser;