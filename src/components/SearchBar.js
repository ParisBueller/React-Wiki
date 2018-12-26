import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = e => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
        this.setState({term: ''});
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="ui fluid action input">
                    <input
                        type="text"
                        placeholder="Search Wikipedia"
                        value={this.state.term}
                        onChange={this.onInputChange}
                    />
                    <div onClick={this.onFormSubmit} className="ui button"><i className="search icon"></i></div>
                </div>
                </form>              
            </div>
        );
    }
}

export default SearchBar;