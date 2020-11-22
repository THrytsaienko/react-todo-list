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

    getAllTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        this.setState(() => ({ 
            tasks: tasks || []
        }));
    }

    handleAddTask = (task) => {
        if (!task) {
            return 'Enter valid value to add task';
        } else if (this.state.tasks.indexOf(task) > -1) {
            return 'This task already exists';
        }

        this.setState((prevState) => ({
            tasks: prevState.tasks.concat([task])
        }), () => {
            this.updateLocalStorage();
        });
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    handleClearTasks = () => {
        this.setState(() => ({
            tasks: []
        }), () => {
            this.updateLocalStorage();
        });
    }

    handleDeleteTask = (taskText) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((task) => taskText !== task)
        }), () => {
            this.updateLocalStorage();
        });
    }

    componentDidMount() {
        this.getAllTasks();
    }

    handleFilterText(value) {
        if(value.length > 0) {
            const tasks = JSON.parse(localStorage.getItem('tasks'));
            const filteredTasks = tasks.filter(item => item.includes(value));
            this.setState(() => ({
                tasks: filteredTasks
            }));
        } else {
            this.getAllTasks();
        }
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
                                    <Filter handleFilterText={(value) => this.handleFilterText(value)} />
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

