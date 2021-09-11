import Head from 'next/head'
import React from 'react'
import BigTextBox from '../utility/BigTextBox'
import color from '../utility/color'
import dummyText from '../utility/dummyText'
import Chat from './chat'




export default class Home extends React.Component {
  static imgStyle = {
    backgroundColor: color.darker,
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    
    position: "relative",
  }

  static topDivStyle = {
    backgroundColor: color.darker,
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    
    position: "relative",
  }

  


  render() {
    return (

      <div style = {{backgroundColor: color.darker}}>
        
        <div style={Home.imgStyle}>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '39%',
          top: '10%'
        }}/>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '-18%',
          top: '10%',
          filter: 'grayscale(100%)'
        }}/>
        <img src="/tau_picture.PNG" style={{
          position: 'relative',
          left: '26%',
          top: '10%',
          filter: 'grayscale(100%)'
        }}/>
        </div>
        <div style = {{
          position: 'relative'
        }}>
          
          <BigTextBox title="Tau" content={dummyText}/>
          
        </div>

      </div>
    )
  }
}
