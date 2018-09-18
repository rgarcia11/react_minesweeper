import React from 'react';
import './Tiles.css';
import Tile from './Tile/Tile';

const tiles = ( props ) => props.tiles.map( ( tile, index ) => {
    return <Tile
        tile={tile}
        key={index}
        tileClick={props.tileClick}
        row={props.row}
        column={index} />
});

export default tiles;