import React from 'react';

class Tile extends React.Component {

    click = () => {
      this.props.tileClick(this.props.row, this.props.column);
    }
    
    render() {
      let style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
      };
      let text = '';
      if ( this.props.tile.show ) {
        text = this.props.tile.value;
        if ( this.props.tile.mine ) {
          style = {
            display: 'inline-block',
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black',
            backgroundColor: 'red'
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