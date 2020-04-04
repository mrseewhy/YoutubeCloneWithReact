import React, { Component } from 'react';
// import {Paper, TextField } from '@material-ui/core'

class SearchBar extends Component {

    state= {
        searchTerm: ""
    }

    handleChange= (e) =>{
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit= (e) => {
        e.preventDefault()
        const {searchTerm} = this.state
        const {onFormSubmit} = this.props
        onFormSubmit(searchTerm)
    }

    render() {
        return (
            <div className="row" style={{margin : 20}}>
                <div className="input-field col s12">
                    <form onSubmit= {this.handleSubmit}>
                        <input id="search" type="text" onChange={this.handleChange} />
                        <label className="active" htmlFor="search">Search</label>
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;
