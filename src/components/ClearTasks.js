import React from 'react';

const ClearTask = (props) => (
    <div>
        <a href="#" className="clear-tasks btn black" onClick={props.handleClearTasks}>Clear Tasks</a>
    </div>
)

export default ClearTask;