import React from 'react';

const ResultItem = ({ result }) => {
        return (
            <div className="item">
               <i className="wikipedia w icon"></i>
               <div className="content">
                    <a href={result.url} className="header">{result.title}</a>
                    <div className="description">{result.description}</div>
               </div>
            </div>
        );

};

export default ResultItem;