import React from "react";
import color from "../utility/color";
import CommandDescription from "../utility/CommandDescription";
import Navigationbar from "../utility/NavigationBar";
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
        return (
            <div style = {CommandsDescriptions.topDivStyle}>
                <BigTextBox title = "Tau's Commands" content = "These are the commands Tau currently supports"/>
                {
                    this.props['commands'].map(command => {
                        return (
                            <CommandDescription syntax = {command.syntax} description = {command.description}/>
                        )
                    })
                }
            </div>
        )
    }
}