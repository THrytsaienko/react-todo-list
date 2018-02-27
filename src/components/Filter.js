import React from 'react';

export default class Filter extends React.Component {
    handleFilter = (e) => {
        const text = e.target.value.toLowerCase();

        document.querySelectorAll('.collection-item').forEach(function (task) {
            const item = task.firstChild.textContent;
            console.log(item.toLowerCase().indexOf(text));
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }

        });
    }
    render () {
        return (
            <div className="input-field col s12">
                <input type="text" name="filter" id="filter" onKeyUp={this.handleFilter} />
                <label htmlFor="filter">Filter Tasks</label>
            </div>
        )
    }
}