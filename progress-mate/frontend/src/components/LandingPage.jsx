import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import '../css/LandingPage.css';
import '../css/animated_bg.css';
import { Button } from './Components';

function LandingPage() {
    const navigate = useNavigate();

    const goToDashboard = () => {
        navigate("/dashboard");
    };
    
    return(
        <div className="App">
            <header className="header">
                {/* animated background */}
                <div className="area" title='area'>
                <ul className="circles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                </ul>
                </div >

                <div className="header-content">
                <h1 className="heading">Boost Your Productivity</h1>
                <p>Track tasks, set goals, and get insights—all in one place.</p>
                <Button 
                    text={'Get Started'}
                    className={'getStartedBtn'}
                    // TODO: Show Login Modal Form instead of goToDashboard
                    onClick={goToDashboard}
                />
                </div>
            </header>

            <main className="main">
                <article className='card'>
                {/* Task Icon */}
                <lord-icon
                    src="https://cdn.lordicon.com/edcgvlnw.json"
                    trigger="loop"
                    delay="3000"
                    colors="primary:#333333,secondary:#ff9800"
                    style={{ width: '100px', height: '100px' }}
                >
                </lord-icon>
                <h2>Task Management</h2>
                <p>Easily create, prioritize, and manage your tasks with our intuitive interface. Stay organized and ensure nothing falls through the cracks as you track your progress in real-time.</p>
                </article>

                <article className='card'>
                {/* Goal Icon */}
                <lord-icon
                    src="https://cdn.lordicon.com/weqkkuwt.json"
                    trigger="loop"
                    delay="3000"
                    colors="primary:#333333,secondary:#4CAF50"
                    style={{ width: '100px', height: '100px' }}
                >
                </lord-icon>
                <h2>Goal Tracking</h2>
                <p>Set achievable goals and monitor your progress with actionable insights. Break down your objectives into manageable milestones to stay motivated and on track.</p>
                </article>

                <article className='card'>
                {/* Calendar Icon */}
                <lord-icon
                    src="https://cdn.lordicon.com/zqyyfteh.json"
                    trigger="loop"
                    delay="3000"
                    colors="primary:#333333,secondary:#ff9800"
                    style={{ width: '100px', height: '100px' }}
                >
                </lord-icon>
                <h2>Calendar Integration</h2>
                <p>Sync your tasks and deadlines with our integrated calendar to visualize your schedule at a glance. Stay ahead of important dates and plan your time effectively with seamless integration.</p>
                </article>
            </main>

            <section className="benefits">
                <h2>Why Choose ProgressMate?</h2>
                <div className="benefit-grid">
                <div className="benefit-item">
                    <h3>Simple and Intuitive</h3>
                    <p>Designed for easy task and goal management.</p>
                </div>
                <div className="benefit-item">
                    <h3>Data-Driven Insights</h3>
                    <p>Analyze your productivity trends and make better decisions.</p>
                </div>
                <div className="benefit-item">
                    <h3>Seamless Syncing</h3>
                    <p>Keep everything organized across all your devices.</p>
                </div>
                </div>
            </section>

            <section className="cta-section">
                <div className="cta-content">
                <h2>Start Boosting Your Productivity Today!</h2>
                <p>Unlock your full potential and enhance your productivity with ProgressMate, the ultimate tool designed to keep you organized and help you achieve your goals effectively.</p>
                <Button
                    text={"Join Now for Free"}
                    className={"cta-button"}
                    // TODO: Show Login Modal Form instead of goToDashboard
                    onClick={goToDashboard}
                />
                </div>
            </section>

            <section className="quote-section">
                <blockquote className="blockquote">
                    <p>“Setting goals is the first step in turning the invisible into the visible.”</p>
                    <span>— Tony Robbins</span>
                </blockquote>
            </section>

            <footer className="footer">
                <span>Copyrights &copy; 2024 ProgressMate</span>
            </footer>
        </div>
    );
}

export default LandingPage;