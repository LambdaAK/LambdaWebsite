import Head from 'next/head'
import React from 'react'
import BigTextBox from '../utility/BigTextBox'
import color from '../utility/color'
import dummyText from '../utility/dummyText'
import IndexTauPictures from '../utility/IndexTauPictures'
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
       <BigTextBox title="Tau" content={dummyText}/>
       <IndexTauPictures/>
        
          
        
        </div>
    )
  }
}
