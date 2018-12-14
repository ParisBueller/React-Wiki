import React from 'react';

import SearchBar from './SearchBar';
import ResultList from './ResultList';

class App extends React.Component {
    state = { results: [] };

    
    onTermSubmit = term => {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&origin=*&format=json`;

        fetch(url)
            .then( res => {
                console.log(res);
                return res.json();
            })
            .then(parsedJson => {
                console.log(JSON.stringify(parsedJson));
                this.setState({ results: parsedJson });
                console.log(this.state);
            });              
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
        );
    }
}

export default App;