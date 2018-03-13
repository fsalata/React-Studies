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
            <div className="row">
                <div className="col-sm-12">
                    <input 
                        className="form-control"
                        value= {this.state.term}
                        onChange={ this._handleInputChange }/>
                </div>
            </div>
        );
    }

    _handleInputChange = (event) => {
        this.setState({ term: event.target.value });
    }
}

export default SearchBar;