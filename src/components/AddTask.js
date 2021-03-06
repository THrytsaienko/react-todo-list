import React from 'react';

export default class AddTask extends React.Component {
    state = {
        error: undefined
    };

    handleAddTask = (e) => {
        e.preventDefault();
        const task = e.target.elements.task.value.trim();
        const error = this.props.handleAddTask(task);

        this.setState(() => ({ error }));
        if (!error) {
            e.target.elements.task.value = '';
        }
    }
    
    render(){
        return (
            <div className="row">
                {this.state.error && <p>{this.state.error}</p>}
                <form id="task-form" onSubmit={this.handleAddTask}>
                    <div className="input-field col s12">
                        <input type="text" name="task" id="task" />
                        <label htmlFor="task">New Task</label>
                    </div>
                    <input type="submit" value="Add Task" className="btn" />
                </form>
            </div>
        )
    }
}