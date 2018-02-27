import React from 'react';
import Header from './Header';
import AddTask from './AddTask';
import HeaderList from './HeaderList';
import ClearTasks from './ClearTasks';
import Tasks from './Tasks';
import Filter from './Filter';

export default class TaskList extends React.Component {
    state = {
        tasks: []
    }
    handleAddTask = (task) => {
        if (!task) {
            return 'Enter valid value to add task';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'This task already exists';
        }

        this.setState((prevState) => ({ tasks: prevState.tasks.concat([task]) }));
    }
    handleClearTasks = () => {
        this.setState(() => ({ tasks: [] }));
    }
    handleDeleteTask = (taskText) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskText !== task)
        }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('tasks');
            const tasks = JSON.parse(json);

            if (tasks) {
                this.setState(() => ({ tasks }));
            }
        } catch (e) {
            // Do nothing at all
        }
        console.log('componentDidMount');
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks.length !== this.state.tasks.length) {
            const json = JSON.stringify(this.state.tasks);
            localStorage.setItem('tasks', json);
        }
        console.log('componentDidUpdate');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card" id="main">
                            <div className="card-content">
                                <Header />
                                <AddTask
                                    handleAddTask={this.handleAddTask}
                                />
                                <div className="card-action">
                                    <HeaderList />
                                    <Filter />
                                    <Tasks
                                        tasks={this.state.tasks}
                                        handleDeleteTask={this.handleDeleteTask}
                                    />
                                    <ClearTasks
                                        handleClearTasks={this.handleClearTasks}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

