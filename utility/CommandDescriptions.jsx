import React from "react";
import color from "./color";
import CommandDescription from "./CommandDescription";
import Navigationbar from "./NavigationBar";
import BigTextBox from "./BigTextBox";

export default class CommandsDescriptions extends React.Component {
    constructor(props) {
        super(props)
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
        console.log('rendering command decriptions')
        return (
            <div style = {CommandsDescriptions.topDivStyle}>
                <BigTextBox title = "Tau's Commands" content = "These are the commands Tau currently supports"/>
                    <br />
                    <br />

                    {
                    this.props['commands'].map(command => {
                        return (
                            <div>
                                
                            <CommandDescription syntax = {command.syntax} description = {command.description}/>
                            <br/><br/>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}