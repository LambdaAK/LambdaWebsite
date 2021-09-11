import React from "react";
import color from "./color";

export default class CommandDescription extends React.Component {
    constructor(props) {
        super(props)
    }

    static topDivStyle = {
        backgroundColor: color.dark
    }

    static syntaxDivStyle = {
        color: color.aqua,
        fontFamily: 'sans-serif',
        fontSize : '30px'
    }

    static descriptionDivStyle = {
        color: color.aqua,
        fontFamily: 'sans-serif',
        fontSize : '30px'
    }

    render() {
        return(
            <div>
                <div style = {CommandDescription.syntaxDivStyle}> {'t!' + this.props.syntax}</div>
                <div style = {CommandDescription.descriptionDivStyle}> {this.props.description}</div>
            </div>
        )
    }
}