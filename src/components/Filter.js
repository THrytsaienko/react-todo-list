import React from 'react';

export default class Filter extends React.Component {
    handleFilter = (e) => {
        const text = e.target.value.toLowerCase();
        this.props.handleFilterText(text);
    }

    render () {
        return (
            <div className="input-field col s12">
                <input type="text" name="filter" id="filter" onChange={this.handleFilter} />
                <label htmlFor="filter">Filter Tasks</label>
            </div>
        )
    }
}