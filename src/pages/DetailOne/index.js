import React, { Component } from 'react';
import {
  tipStyle,
  circleStyle,
  imgStyle,
  textStyle,
} from './style';
import axios from 'axios';
import store from '../../store/index';
import "animate.css";
import './style.css';

class DetailOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.id,
      imgText:'',
      fadeIn:"animate__animated animate__fadeInDown"
    }
  }

  componentDidMount() {
    let texturl = 'http://112.124.26.56:8999/obj/getone?id=' + this.state.id;
    let token = store.getState().toJS().mapReducer.token
    axios.get(texturl,{
      headers:{
        'Content-Type':'application/json',
        'Accept':'*/*',
        'Authorization':token
      }
    }).then(res => {
      const result = res.data;
      const data = result.data;
      console.log(data);
      this.setState({
        imgText:data.Text
      })
    });
  }
  
  render() {
    return (
      <div className="tip" style={tipStyle} className={this.state.fadeIn}>
        <div className="circle" style={circleStyle}>
          <img src={'https://ncu-hometracking.oss-cn-hangzhou.aliyuncs.com/'+this.state.id+'.png'}  alt="" style={imgStyle}/>
        </div>
        <div className="text" style={textStyle}>
          {this.state.imgText}
        </div>
      </div>
    )
  }
}

export default DetailOne;