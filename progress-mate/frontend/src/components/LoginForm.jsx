import React, { useState } from "react";

// Components
import { Input, Button } from '../components/Components';

// CSS
import '../css/loginForm.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
    
        // Simple validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
    
        // Mock login - Replace with your authentication logic
        if (username === 'user' && password === 'pass') {
            console.log('Login successful!');
        } else {
            setError('Invalid username or password');
        }
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    return (
        <div className="login-overlay">
            <main className="login-container">
                <aside className="side-image">
                    {/* // TODO: Some object here. */}
                    Some image here
                </aside>
                <form id="login-form" className="login-form">
                    <Input 
                        type={'text'}
                        placeholder={'Username'}
                        onChange={handleUsername}
                    />

                    <Input 
                        type={'password'}
                        placeholder={'Password'}
                        onChange={handlePassword}
                    />

                    <Button
                        text={'Login'}
                        onClick={handleSubmit}
                    />
                </form>
            </main>
        </div>
    );
}

export default LoginForm;