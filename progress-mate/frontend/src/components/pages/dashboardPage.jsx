import React from "react";

// Components
import { Button, Progress } from '../Components';

// CSS
import '../../css/pages_css/dashboardPage.scss';

// JS
import rotateChevronDown from '../../js/bx_ChevronDown';

function DashboardPage() {
    let taskList = [
        'Code the tasks today.',
        'Code the goals today.',
        'Code the calendar today.',
    ];

    let goalList = [
        'Develop the tasks today.',
        'Develop the goals today.',
        'Develop the calendar today.',
    ];

    return(
        <div className="dashboard">
            <main className="dashboardMain" aria-label="Dashboard Main Content">
                <section className="taskSection">
                    <article>
                        <h2>Tasks</h2>
                        <Button
                            icon={<i className='bx bx-plus'></i>}
                            text={'Add Task'}
                            className={'addTaskBtn'}
                        />
                    </article>

                    <br />

                    <ul className="taskField">
                        {taskList.map((task, index) => (
                            <li className="taskItem" key={index}>
                                <label htmlFor={`taskCheckbox-${index}`}>
                                    <input type="checkbox" id={`taskCheckbox-${index}`} />
                                    <span className="taskName">{task}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="goalSection">
                    <article>
                        <h2>Goals</h2>
                        <Button
                            icon={<i className='bx bx-plus'></i>}
                            text={'Add Goal'}
                            className={'addGoalBtn'}
                        />
                    </article>

                    <br />

                    <ul className="goalField">
                        {goalList.map((goal, index) => (
                            <li className="goalItem" key={index}>
                                <article className="goalContainer" >
                                    <aside id="goalContent" className="goalContent">
                                        {/* // TODO: Get the list of goals */}
                                        <div>
                                            <span className="goalName">{goal}</span>
                                            <Progress min={0} max={10} value={7} />
                                        </div>

                                        {/* // TODO: Get the list based on which Goal per task. */}
                                        <ul className="taskContainer">
                                            <li className="subTask">
                                                <i className='bx bxs-circle'></i>
                                                <span className="taskName">Task 1</span>
                                            </li>
                                            <li className="subTask">
                                                <i className='bx bxs-circle'></i>
                                                <span className="taskName">Task 2</span>
                                            </li>
                                            <li className="subTask">
                                                <i className='bx bxs-circle'></i>
                                                <span className="taskName">Task 3</span>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="ddBtnContainer">
                                        <Button 
                                            icon={<i className='bx bx-chevron-down'></i>}
                                            className={'dropdownBtn'}
                                            onClick={(event) => rotateChevronDown(event)}
                                        />
                                    </aside>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="calendarSection">
                    <h2>Calendar</h2>

                    {/* // TODO: Calendar integration */}
                    <p>Coming soon!</p>
                </section>
            </main>

            <footer className="user-footer">
                <span className="footer-content">&copy; 2024 ProgressMate</span>
            </footer>
        </div>
    )
}

export default DashboardPage;