import React from "react";

// CSS
import '../css/Dashboard.css';

function Dashboard() {
    return(
        <div className="dashboard">
            <header className="user-header">

            </header>

            <main className="user-main">
                <nav className="nav">
                    <ul className="contents">
                        <li className="item">Dashboard</li>
                        <li className="item">Tasks</li>
                        <li className="item">Goals</li>
                        <li className="item">Calendar</li>
                    </ul>
                </nav>

                <article className="user-article">
                    {/* // TODO: This will contain Router Pages. */}
                </article>
            </main>

            <footer className="user-footer">
                <span className="footer-content">&copy; 2024 ProgressMate</span>
            </footer>
        </div>
    );
}

export default Dashboard;