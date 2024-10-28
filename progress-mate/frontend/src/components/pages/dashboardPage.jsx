import React from "react";

// Components
import { Button } from '../Components';

// CSS
import '../../css/pages_css/dashboardPage.scss';

function DashboardPage() {
    return(
        <div className="dashboard">
            <main className="dashboardMain" aria-label="Dashboard Main Content">
                <section className="taskSection">
                    <article>
                        <h2>Tasks</h2>
                        <Button
                            icon={<i className='bx bx-plus'></i>}
                            text={'Add Task'}
                            onClick={console.log('Task added.')}
                        />
                    </article>

                    <ul className="taskField">
                        <li className="taskItem">
                            <label htmlFor="taskCheckbox">
                                <input type="checkbox" id="taskCheckbox" />
                                <span className="taskName">Code the task today.</span>
                            </label>
                        </li>
                        <li className="taskItem">
                            <label htmlFor="taskCheckbox">
                                <input type="checkbox" id="taskCheckbox" />
                                <span className="taskName">Code the goals today.</span>
                            </label>
                        </li>
                        <li className="taskItem">
                            <label htmlFor="taskCheckbox">
                                <input type="checkbox" id="taskCheckbox" />
                                <span className="taskName">Code the calendar today.</span>
                            </label>
                        </li>
                    </ul>
                </section>

                <section className="goalSection">
                    <article>
                        <h2>Goals</h2>
                        <Button
                            icon={<i className='bx bx-plus'></i>}
                            text={'Add Goal'}
                            onClick={console.log('Task added.')}
                        />
                    </article>


                </section>

                <section className="calendarSection">
                    <h2>Calendar</h2>

                    {/* // TODO: Calendar integration */}
                </section>
            </main>
        </div>
    )
}

export default DashboardPage;