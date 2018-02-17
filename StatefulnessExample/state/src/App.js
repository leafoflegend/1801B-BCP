import React, { Component } from 'react';
import StatefulComponent from './StatefulComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    buttons: [
      {
        color: 'yellow',
      }, 
      {
        color: 'yellow',
      }, 
      {
        color: 'yellow',
      }, 
      {
        color: 'yellow',
      }, 
      {
        color: 'yellow',
      },
    ],
  }

  handleClick = (index) => {
    this.setState({
      buttons: this.state.buttons.map((curElem, i) => {
        if (i === index) {
          return {
            color: curElem.color === 'yellow' ? 'blue' : 'yellow',
          }
        } else {
          return curElem;
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div
          style={ {
            width: '100%',
            height: '100px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          } }
        >
          <button 
            style={ {
              width: '100px',
              height: '30px',
              borderRadius: '5px',
            } }
            onClick={ () => {
              this.setState({
                buttons: this.state.buttons.map(function(curElem) {
                  curElem.color = 'blue';
                  return curElem;
                })
              })
            } }
          >
            Change Color
          </button>
        </div>
        <div
          style={ {
            width: '100%',
            height: '500px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          } }
        >
          {
            this.state.buttons.map((button, i) => (
              <StatefulComponent 
                color={ button.color }
                onClick={ this.handleClick }
                myIndex={ i }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
