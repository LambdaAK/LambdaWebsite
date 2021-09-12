import React from "react";
import color from "../utility/color";
import CommandDescription from "../utility/CommandDescription";
import CommandDescriptions from "../utility/CommandDescriptions";
import Navigationbar from "../utility/NavigationBar";
import Swup from 'swup'
import allCommands from "../utility/allCommands";

export default class Commands extends React.Component {
    constructor(props) {
        super(props)
    }

    static commands = allCommands

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
            <div style = {Commands.topDivStyle}>
                <Navigationbar/>
                <CommandDescriptions commands = {Commands.commands}/>
            </div>
        )
    }
}