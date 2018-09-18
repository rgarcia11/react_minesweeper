import React from 'react';
import Tiles from './Tiles/Tiles';

const board = ( props ) => props.rows.map( ( row, index ) => {
    return <div>
            <Tiles
            tiles={row}
            key={index} 
            tileClick={props.tileClick}
            row={index}/>
           </div>
});

export default board;