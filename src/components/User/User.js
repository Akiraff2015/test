import React from 'react';
import RegisterForm from '../forms/Register/RegisterForm';
import LoginForm from '../forms/Login/LoginForm';

const user = (props) => {
    return (
        <div>
            <h1>This is register form</h1>
            <RegisterForm />

            <h1>This is a login form</h1>
            <LoginForm />
        </div>
    );
}

export default user;