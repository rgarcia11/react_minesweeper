import React from 'react';
import './Tiles.css';
import Tile from './Tile/Tile';

const tiles = ( props ) => props.tiles.map( ( tiles, index ) => {
    return <Tile
        value={tiles}
        key={index} />
});

export default tiles;