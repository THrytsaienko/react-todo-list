import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({ tasks, handleDeleteTask }) => (
    <ul className="collection">
        {
            tasks.map((task) => (
                <TaskItem
                    key={task}
                    taskText={task}
                    handleDeleteTask={handleDeleteTask}
                />
            ))
        }
    </ul>
)

export default Tasks;