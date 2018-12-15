import React from 'react';

import SearchBar from './SearchBar';
import ResultList from './ResultList';

class App extends React.Component {
    state = { results: [] };



    
    onTermSubmit = async term => {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&origin=*&format=json`;

        await fetch(url)
            .then( res => {
                return res.json();
            })
            .then(parsedJson => {
                this.setState({ results: parsedJson });
                console.log(this.state);
            });              
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <ResultList />
            </div>
        );
    }
}

export default App;