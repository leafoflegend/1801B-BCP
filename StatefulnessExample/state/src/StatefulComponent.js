import React from 'react';

// React is at its core a really really simple concept. Its HTML and Javascript mixed together in the same file.

class StatefulComponent extends React.Component {  
  render () {
    const color = this.props.color;
    const onClick = this.props.onClick;
    const myIndex = this.props.myIndex;

    return (
      <div
        style={ {
          height: '100px',
          width: '100px',
          borderRadius: '3px',
          color: 'black',
          backgroundColor: color,
          border: '1px solid #cecece',
        } }
        onClick={ () => { onClick(myIndex); } }
      >
        <span> Stateful Component </span>
      </div>
    )
  }
}

// Stateful vs Stateless
// Stateful means that 'I manage my own data.'
// Stateless means that 'I do not manage my own data.'

// I am something else and I want to change that stateful things data.
// You cant.

export default StatefulComponent;
