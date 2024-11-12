import React, { useState } from "react";

// Components
import { Input, Button } from '../components/Components';

// Illustrations
import { ReactComponent as LoginIllustration } from '../assets/svg/Secure-login.svg';

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

    const handleCancel = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-overlay">
            <main className="login-container">
                <aside className="side-image">
                    <LoginIllustration width="500" height="500" />
                </aside>
                <form id="login-form" className="login-form">
                    <h1>Login</h1>
                    <Input 
                        type={'text'}
                        placeholder={'Username'}
                        onChange={(e) => { setUsername(e.target.value); }}
                        // error={"Nice try"}
                    />

                    <Input 
                        type={'password'}
                        placeholder={'Password'}
                        onChange={(e) => { setPassword(e.target.value); }}
                    />

                    <Button
                        text={'Login'}
                        onClick={handleSubmit}
                        className={'login-btn'}
                    />

                    <Button
                        text={'Cancel'}
                        onClick={handleCancel}
                        className={'cancel-btn'}
                    />
                </form>
            </main>
        </div>
    );
}

export default LoginForm;