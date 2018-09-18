import React from 'react';
import Tiles from './Tiles/Tiles';

const board = ( props ) => props.rows.map( ( row, index ) => {
    return <div>
            <Tiles
            tiles={row}
            key={index} />
           </div>
});

export default board;