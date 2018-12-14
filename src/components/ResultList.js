import React from 'react';
import ResultItem from './ResultItem';

const ResultList = ({ results }) => {
    const renderedList = results.map( result => {
        return <ResultItem />
    });

    return <div>Result List</div>;

};

export default ResultList;