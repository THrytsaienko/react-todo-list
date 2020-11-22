import React from 'react';
import styled from 'styled-components'

const DeleteIcon = styled.i`
    cursor: pointer;
`

const TaskItem = ({ taskText, handleDeleteTask }) => (
    <li className="collection-item">
        {taskText}
        <a className='delete-item secondary-content'
            onClick={() => {
                handleDeleteTask(taskText);
            }}
        >
            <DeleteIcon className="fa fa-remove"></DeleteIcon>
        </a>
    </li>
)

export default TaskItem;