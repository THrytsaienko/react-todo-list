import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import HeaderList from './components/HeaderList';
import ClearTasks from './components/ClearTasks';
import Tasks from './components/Tasks';
import TaskItems from './components/TaskItem';
import Filter from './components/Filter';

ReactDOM.render(<TaskList />, document.getElementById('app'));