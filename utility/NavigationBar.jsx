import React from "react";
import color from "./color";

export default class Navigationbar extends React.Component {
    constructor(props) {
        super(props)
    }

    static linkStyle = {
        color: color.blurple,
        textDecoration: 'none',
        fontFamily: 'sans-serif',
        listStyleType: 'none',
        fontSize: '70px',
        float: 'bottom',
        color: color.aqua,
    }

    render() {
        return (

        <nav>
        <ul>
            <li><a style = {Navigationbar.linkStyle} href = '/'>Home Page</a></li>
            <li><a style = {Navigationbar.linkStyle} href = '/commands'>Commands</a></li>
        
     
        </ul>
        </nav>
        )
    }
}