import React from "react";

// Components
import { Button } from '../Components';

// CSS
import '../../css/pages_css/taskPage.scss';

function TasksPage() {
    return(
        <div className="task">
            <header className="tasksHeader">
                <h2>Manage Tasks</h2>
                <p className="pageDescription">Check the status of your tasks.</p>
            </header>

            <main className="taskMain" aria-label="Tasks Main Content">
                <table>
                    <tr>
                        <th>Task Name</th>
                        <th>Goal Included</th>
                        <th>Progress</th>
                    </tr>
                    <tr>
                        <td>Create Task page</td>
                        <td>Tasks Page</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>Create Task page</td>
                        <td>Tasks Page</td>
                        <td>50%</td>
                    </tr>
                    <tr>
                        <td>Create Task page</td>
                        <td>Tasks Page</td>
                        <td>50%</td>
                    </tr>
                </table>

                <aside className="actionsArea">
                    <h3>Actions</h3>
                    <div className="actionsContainer">
                        <Button 
                            text={'Add new Task'}
                            className={'button'}
                        />
                    </div>
                </aside>
            </main>

            <footer className="user-footer">
                <span className="footer-content">&copy; 2024 ProgressMate</span>
            </footer>
        </div>
    );
}

export default TasksPage;