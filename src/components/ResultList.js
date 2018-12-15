import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({ results }) => {
    const renderedList = results.map( result => {
        return <ResultItem result={result}/>
    });

    return <div className="ui relaxed animated list">{renderedList}</div>;

};

export default ResultList;