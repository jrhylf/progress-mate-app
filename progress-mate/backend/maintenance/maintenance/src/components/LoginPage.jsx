import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Components
import { Label, Link, Input, Button } from './Components';

// Images
import AdminLogo from '../images/logo512.png';

function LoginPage() {
    const [adminUser, setAdminUser] = useState('');
    const [adminPass, setAdminPass] = useState('');

    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    };

    const handleLogin = (e) => {
        e.preventDefault();
        goToDashboard();
    };

    return(
        <div className="font-sans">
            <main className="h-screen w-full flex flex-wrap justify-center content-center bg-green-200">
                {/* // TODO: Fix form submission on login */}
                <form action={handleLogin} className="h-max w-full max-w-md px-8 py-4 flex flex-col flex-wrap items-center justify-center bg-white shadow-md rounded-xl">
                    <img src={AdminLogo} alt="Admin Logo" className="h-16 w-16"/>
                    <h1 className="text-3xl font-semibold antialiased mt-4 mb-4">
                        Admin
                    </h1>

                    <div className="h-auto w-full my-4">
                        <Label
                            htmlFor={'adminUsername'}
                            text={'Username'}
                        />
                        <Input 
                            id={'adminUsername'}
                            type={'text'}
                            value={adminUser}
                            onChange={(e) => { setAdminUser(e.target.value); }}
                        />
                    </div>

                    <div className="h-auto w-full my-4">
                        <Label
                            htmlFor={'adminPassword'}
                            text={'Password'}
                        />
                        <Link
                            text={'Forgot password?'}
                            href={'https://jrfernandez-portfolio.netlify.app'}
                            target={'_blank'}
                        />
                        <Input 
                            id={'adminPassword'}
                            type={'password'}
                            value={adminPass}
                            onChange={(e) => { setAdminPass(e.target.value); }}
                        />
                    </div>

                    <Button 
                        // type={'submit'}
                        text={'Login'}
                        onClick={handleLogin}
                    />
                </form>
            </main>
        </div>
    );
}

export default LoginPage;