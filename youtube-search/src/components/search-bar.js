import React, { Component } from "react";

class SearchBar extends Component {
    constructor (props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    render() {
        return (
            <div className="search-bar">
                <input 
                    className="form-control"
                    value= {this.state.term}
                    onChange={ event => this._handleInputChange(event.target.value) }
                />
            </div>
        );
    }

    _handleInputChange = (term) => {
        this.setState({ term });
        this.props.onSearchTermChanged(term);
    }
}

export default SearchBar;