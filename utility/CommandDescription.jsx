import { motion } from "framer-motion";
import React from "react";
import Swup from 'swup'

import color from "./color";

export default class CommandDescription extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            hovering: false,
            opacity: '100%'
        }
        
        // bind the methods
            this.startHover = this.startHover.bind(this)
            this.endHover = this.endHover.bind(this)
    }
    static topDivStyle = {
        backgroundColor: color.dark,
        borderStyle: 'solid',
        borderColor: color.aqua,
        borderRadius: '10px',
        borderWidth: '10px',
        display: 'block',
        color: color.blurple,
    }

    static syntaxDivStyle = {
            
        fontFamily: 'sans-serif',
        fontSize : '40px'
    }

    static descriptionDivStyle = {
            
        fontFamily: 'sans-serif',
        fontSize : '30px'
    }
            
            
    startHover() {
        this.setState({hovering: true})
    }

    endHover() {
        this.setState({hovering: false})
    }

    
    

    render() {
        let colorChangeCss = {
            backgroundColor: ['hsl(206, 9%, 15%)', 'hsl(0, 0%, 0%)'],
            color: color.aqua,
            
        }

        if (!this.state.hovering) colorChangeCss = {
            backgroundColor: ['hsl(0, 0%, 0%)', 'hsl(206, 9%, 15%)']
        }

        return(
            <motion.div animate={colorChangeCss} transition = {{times: 1}} style = {{...CommandDescription.topDivStyle}} onMouseEnter = {() => this.startHover()} onMouseLeave = {() => this.endHover()}>           
                <div style = {{...CommandDescription.syntaxDivStyle}}> {'t!' + this.props.syntax}</div>
                <div style = {{...CommandDescription.descriptionDivStyle}}> {this.props.description}</div>
            </motion.div>
            
        )
    }
}