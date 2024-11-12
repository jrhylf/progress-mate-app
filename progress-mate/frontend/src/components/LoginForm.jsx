import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Input, Button } from '../components/Components';
import googleIcon from '../assets/icons/google.png';

// Illustrations
import { ReactComponent as LoginIllustration } from '../assets/svg/Secure-login.svg';

// CSS
import '../css/loginForm.css';

const LoginForm = ({ showLoginForm, setShowLoginForm }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
    
        // Simple validation
        if (!username || !password) {
            setError('Please enter both username and password.');
            return;
        }
    
        // Mock login - Replace with your authentication logic
        if (username === 'user') {
            console.log('Username exists');
        } else {
            setUsernameError('Incorrect username');
        }

        if (password === 'pass') {
            console.log('Password Exists');
        } else {
            setPasswordError('Incorrect password');
        }
        
        if (username === 'user' && password === 'pass') {
            console.log('Login Successful!');
            handleClear();
            goToDashboard();
        } else {
            console.log('Login Unsuccessful!');
        }
    };

    const handleClear = () => {
        setUsername('');
        setPassword('');
    };

    const handleGoogleLogin = (e) => {
        e.preventDefault();
        console.log('Google Login');
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
                        id={'uname-input'}
                        type={'text'}
                        placeholder={'Username'}
                        value={username}
                        onChange={(e) => { setUsername(e.target.value); }}
                        error={usernameError}
                    />

                    {/* // TODO: Fix this */}
                    {/* {error && <span className="error-message">{error}</span>}
                    {usernameError && <span className="error-message">{usernameError}</span>} */}

                    <Input 
                        id={'pword-input'}
                        type={'password'}
                        placeholder={'Password'}
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); }}
                        error={passwordError}
                    />

                    <Button
                        text={'Login'}
                        onClick={handleSubmit}
                        className={'login-btn'}
                    />

                    <Button
                        text={'Cancel'}
                        onClick={() => setShowLoginForm(false)}
                        className={'cancel-btn'}
                    />

                    <p className="gray-text">- or -</p>

                    <Button
                        icon={<img src={googleIcon} alt="Google Icon" className="google-icon" />}
                        text={'Google'}
                        onClick={handleGoogleLogin}
                        className={'google-btn'}
                    />
                </form>
            </main>
        </div>
    );
}

export default LoginForm;