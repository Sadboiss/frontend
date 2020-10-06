import React, { Component } from 'react';


export default class FilterCheckbox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            filter: props.filter
        }
    }

    render() {
        // const handleCheckFilter = () => {
        //     this.setState({
        //         checked: !this.state.checked
        //     })
        // }
        return (
            <label className="filter-container">
                <input className="filter-checkbox" type="checkbox"/>
                <p>{this.state.filter.name}</p>
                <span className="checkmark"></span>
            </label>
        )
    }
}