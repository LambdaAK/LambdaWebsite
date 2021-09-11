import React from "react";
import color from "./color";

export default class CommandDescription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false
        }
        
        // bind the methods
        this.startHover = this.startHover.bind(this)
        this.endHover = this.endHover.bind(this)
    }

    startHover() {
        this.setState({hovering: true})
        console.log('startHover')
    }

    endHover() {
        this.setState({hovering: false})
        console.log('endHover')
    }


    static topDivStyle = {
        backgroundColor: color.dark,
        borderStyle: 'solid',
        borderColor: color.aqua,
        borderRadius: '10px',
        borderWidth: '15px',
        display: 'inline-block',
        color: color.blurple
    }

    static syntaxDivStyle = {
        
        fontFamily: 'sans-serif',
        fontSize : '40px'
    }

    static descriptionDivStyle = {
        
        fontFamily: 'sans-serif',
        fontSize : '30px'
    }

    render() {
        let borderColor;

        if (!this.state.hovering) borderColor = color.aqua
        else borderColor = color.red

        


        return(
            <div style = {{...CommandDescription.topDivStyle, borderColor : borderColor}} onMouseEnter = {() => this.startHover()} onMouseLeave = {() => this.endHover()}>
                <div style = {{...CommandDescription.syntaxDivStyle}}> {'t!' + this.props.syntax}</div>
                <div style = {{...CommandDescription.descriptionDivStyle}}> {this.props.description}</div>
               
            </div>
        )
    }
}