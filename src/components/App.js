import React from 'react';

import SearchBar from './SearchBar';
import ResultList from './ResultList';

class App extends React.Component {
    state = { results: [] };

    onTermSubmit = async term => {
        const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${term}&origin=*&format=json&limit=20`;

        await fetch(url)
            .then( res => {
                return res.json();
            })
            .then(parsedJson => {
               const resultsArray = [];
               const titleArray = parsedJson[1];
               const descriptionArray = parsedJson[2];
               const urlArray = parsedJson[3];
               if(term) {
               for(let i=0; i < titleArray.length; i++) {
                resultsArray.push({title:titleArray[i], description:descriptionArray[i], url:urlArray[i]});
                }
            } 
               this.setState({ results: resultsArray });
               
            });              
    }
     
    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <ResultList results={this.state.results}/>
            </div>
        );
    }
}

export default App;