import React from 'react';

export default function Apps(props) {
    return(
        <div className='apps'>
            <h2>{props["App"]}</h2>
            <div className='category'>{props["Category"]}</div>
            <div className='rating'>{props['Rating']}</div>
            <div className='genre'>{props["Genre"]}</div>
            <div className='installs'>{props['Installs']}</div>
            <div className='updated'>Last updated on: {props["Last Updated"]}</div>
        </div>
    )
}