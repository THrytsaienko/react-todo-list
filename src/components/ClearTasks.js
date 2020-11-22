import React from 'react';

const ClearTask = ({ handleClearTasks }) => {
    return (
        <div>
            <div href="#" className="clear-tasks btn black" onClick={handleClearTasks}>Clear Tasks</div>
        </div>
    )
}

export default ClearTask;