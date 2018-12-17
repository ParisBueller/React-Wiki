import React from 'react';

const ResultItem = ({ result }) => {
        return (
            <div className="item">
               <i className="wikipedia w icon"></i>
               <div className="content">
                    <a className="header">{result[3]}</a>
                    <div className="description">{result[2]}</div>
               </div>
            </div>
        );

};

export default ResultItem;