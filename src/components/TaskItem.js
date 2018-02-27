import React from 'react';

const TaskItem = (props) => (
    <li className="collection-item">
        {props.taskText}
        <a className='delete-item secondary-content'
            onClick={(e) => {
                props.handleDeleteTask(props.taskText);
            }}
        >
            <i className="fa fa-remove"></i>
        </a>
    </li>
)

export default TaskItem;