import React from 'react';

class Tile extends React.Component {

    click = () => {
      this.props.tileClick(this.props.row, this.props.column);
    }
    
    render() {
      let style = {
        display: 'inline-block',
        padding: '18px',
        textAlign: 'center',
        border: '1px solid black',
        width: '50px',
        height: '50px'
      };
      let text = ' ';
      if ( this.props.tile.show ) {
        if ( this.props.tile.value != 0 ) {
          text = this.props.tile.value;
        }
        style = {
            display: 'inline-block',
            padding: '18px',
            textAlign: 'center',
            border: '1px solid black',
            backgroundColor: '#5b5b5b',
            width: '50px',
            height: '50px'
        };
        if ( this.props.tile.mine ) {
          style = {
            display: 'inline-block',
            padding: '18px',
            textAlign: 'center',
            border: '1px solid black',
            backgroundColor: 'red',
            width: '50px',
            height: '50px'
          };
          text = 'M';
        }
      }
      return <button
              style={style}
              onClick={this.click}>{text}</button>
    }
};

export default Tile;