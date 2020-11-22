import React from 'react';

const ClearTask = ({ handleClearTasks }) => {
    return (
        <div>
            <a href="#" className="clear-tasks btn black" onClick={handleClearTasks}>Clear Tasks</a>
        </div>
    )
}

export default ClearTask;