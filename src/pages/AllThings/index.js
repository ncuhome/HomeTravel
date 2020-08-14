import React, { Component } from 'react';
import { Divider } from 'antd';
import {
  FirstStyle,
  backStyle,
  arrowStyle,
  arrowInsideStyle,
  naviStyle,
  naviTextStyle,
  naviUrlStyle,
  contentStyle,
  headerStyle,
  textStyle,
  dividerStyle,
  // listStyle,
  itemStyle,
  textItemStyle,
  fuzhu,
  itemUniqStyle
} from './style';
import store from '../../store/index';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons'
import axios from 'axios';

class AllThings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }

  componentDidMount() {
    this.setState({
      list:store.getState().toJS().mapReducer.list
    })
  }

  handleBack() {
    this.props.history.go(-1);
  }
  
  render() {
    return (
      <div style={FirstStyle}>
        <div style={backStyle}></div>
        <div className="arrow" style={arrowStyle} onClick={this.handleBack.bind(this)}>
          <img src={require('./pics/arrow.png')} alt="" style={arrowInsideStyle}/>
        </div>
        <div className="navi" style={naviStyle}>
          <div style={fuzhu}>
            <div className="naviText" style={naviTextStyle}>引导文案</div>
            <div className="naviURL" style={naviUrlStyle}>家园地址</div>
          </div>
        </div>
        <div className="content" style={contentStyle}>
          <div className="header" style={headerStyle}>
            <div className="left" style={textStyle}>物品</div>
            <div className="center" style={textStyle}>线上点亮</div>
            <div className="right" style={textStyle}>线下点亮</div>
          </div>
          <Divider style={dividerStyle}/>
          {
            this.state.list.map((item,index) => {
              return (
                <div className="content-item" style={index===0?itemUniqStyle:itemStyle} key={index}>
                  <div style={textItemStyle}>{item.getOline?item.name:'-'}</div>
                  <div style={textItemStyle}>{item.getOline?(<CheckCircleTwoTone twoToneColor="#52c41a" />):'-'}</div>
                  <div style={textItemStyle}>{item.getOffline?(<CheckCircleTwoTone twoToneColor="#52c41a" />):(<CloseCircleTwoTone twoToneColor="#B22222"/>)}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default AllThings;