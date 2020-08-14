import React, { Component } from 'react';
import {
  // firstOneStyle,
  // firstTwoStyle,
  mainStyle
} from './style';
// import { CSSTransition } from 'react-transition-group';
// import './fade.css';

class FirstOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstOneStyle: {
        height:'100%',
        width:'100%',
        opacity:1
      },
      firstTwoStyle: {
        position:'absolute',
        // display:'none',
        opacity:0,
        height:'100%',
        width:'100%',
        top:'0',
        zIndex:-9,
      }

    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log(123);
    this.setState((state) => ({
      firstOneStyle: {
        height:'100%',
        width:'100%',
        transition: 'all 1s',
        opacity: 0,
      },
    }),() => {
      setTimeout(() => {
        this.setState({
          firstTwoStyle: {
            position:'absolute',
            top:0,
            opacity: 1,
            height:'100%',
            width:'100%',
            transition: 'all 1s',
          }
        })
      },500)
    })
  }

  handleEnter() {
    console.log("opening");
    this.props.history.push('/mapOne');
  }
  
  render() {
    return (
      <div style={mainStyle}>
        <div style={this.state.firstOneStyle} onClick={this.handleChange}>
          <img src={require('./pics/first1.png')} alt=""/>
        </div>
        <div style={this.state.firstTwoStyle} onClick={this.handleEnter}>
          <img src={require('./pics/first2.png')} alt=""/>
        </div>
      </div>
    )
  }
}

export default FirstOne;