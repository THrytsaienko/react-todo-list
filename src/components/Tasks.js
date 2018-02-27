import React from 'react';
import TaskItem from './TaskItem';

const Tasks = (props) => (
    <ul className="collection">
        {
            props.tasks.map((task) => (
            <TaskItem
                key={task}
                taskText={task}
                handleDeleteTask={props.handleDeleteTask}
            />
            ))
        }
    </ul>
)

export default Tasks;