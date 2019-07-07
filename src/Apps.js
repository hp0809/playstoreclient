import React from 'react';

export default function Apps(props) {
    return(
        <div className='apps'>
            <h2>{props["App"]}</h2>
            <div className='Rating'>{props['Rating']}</div>
            <div className='Genres'>{props["Genres"]}</div>
            <div className='installs'>{props['Installs']}</div>
            <div className='updated'>Last updated on: {props["Last Updated"]}</div>
        </div>
    )
}