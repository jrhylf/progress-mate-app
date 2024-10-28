import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// Packages / Libraries
import 'boxicons';

// Pages
import DashboardPage from "./pages/dashboardPage";
import TasksPage from "./pages/tasksPage";
import GoalsPage from "./pages/goalsPage";
import CalendarPage from "./pages/calendarPage";

// CSS
import '../css/Dashboard.css';
import '../css/custom_bx_icon.css';
import '../css/useNavToggle.css';

//JS
import useNavToggle from "../js/useNavToggle";

function Dashboard() {
    const { isOpen, toggleNav } = useNavToggle();

    // TODO: Get the username from Login Session.
    const [username, setUsername] = useState('John');

    // TODO: Apply login session for this.
    // const navigate = useNavigate();

    const [currentPage, setCurrentPage] = useState(() => {
        return localStorage.getItem('currentPage');
    });

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboardPage':
                return <DashboardPage />
            case 'tasksPage':
                return <TasksPage />;
            case 'goalsPage':
                return <GoalsPage />;
            case 'calendarPage':
                return <CalendarPage />;
            default:
                return <DashboardPage />;
        }
    };

    useEffect(() => {
        localStorage.setItem('currentPage', currentPage);
    }, [currentPage]);

    return(
        <div>
            <header className="user-header">
                <span className="greeting">Hi {username}!</span>

                {/* Waving Hand */}
                <lord-icon
                    src="https://cdn.lordicon.com/hkbcsvln.json"
                    trigger="loop"
                    delay="3000"
                    style={{ width: '40px', height: '40px' }}>
                </lord-icon>
            </header>

            <main className="user-main">
                <nav className="nav" id="nav">
                    <header className="nav-header">
                        <span id="pageName" className="pageName">{currentPage}</span>

                        {/* Menu Icon */}
                        <button id="nav-btn" className="nav_btn" onClick={toggleNav} aria-label="Toggle navigation">
                            <box-icon id="menuIcon" name='menu' size='md' border='square'></box-icon>
                        </button>
                    </header>
                    
                    <div id="nav-container" className={`nav-container ${isOpen ? 'open' : 'close'}`}>
                        <ul className="nav-links">
                            <li title="Dashboard" className={currentPage === 'dashboardPage' ? 'navItem active' : 'navItem'} onClick={() => setCurrentPage('dashboardPage')}>
                                <box-icon name='bar-chart-square' size='sm'></box-icon>
                                <span className="nav-item-name">Dashboard</span>
                            </li>
                            <li title="Tasks" className={currentPage === 'tasksPage' ? 'navItem active' : 'navItem'} onClick={() => setCurrentPage('tasksPage')}>
                                <box-icon name='task' size='sm'></box-icon>
                                <span className="nav-item-name">Tasks</span>
                            </li>
                            <li title="Goals" className={currentPage === 'goalsPage' ? 'navItem active' : 'navItem'} onClick={() => setCurrentPage('goalsPage')}>
                                <box-icon name='target-lock' size='sm'></box-icon>
                                <span className="nav-item-name">Goals</span>
                            </li>
                            <li title="Calendar" className={currentPage === 'calendarPage' ? 'navItem active' : 'navItem'} onClick={() => setCurrentPage('calendarPage')}>
                                <box-icon name='calendar' size='sm'></box-icon>
                                <span className="nav-item-name">Calendar</span>
                            </li>
                        </ul>
                    </div>
                </nav>

                <article className="user-article">
                    {/* This should show the page path. */}
                    {/* // TODO: breadcrumb */}
                    <span className="breadcrumb">
                        <box-icon name="home-circle" type="solid"></box-icon> 
                        <span className="slash">/</span> 
                        <span>Dashboard</span>
                    </span>

                    {/* This contain Router Pages. */}
                    {renderPage()}
                </article>
            </main>

            <footer className="user-footer">
                <span className="footer-content">&copy; 2024 ProgressMate</span>
            </footer>
        </div>
    );
}

export default Dashboard;