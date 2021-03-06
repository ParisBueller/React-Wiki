import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({ results }) => {
    const renderedList = results.map( result => {
       return <ResultItem key={result.title} result={result}/>
    });

    return <div className="ui relaxed animated list">{renderedList}</div>;

};

export default ResultList;