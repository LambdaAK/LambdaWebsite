import React from "react";
import color from "../utility/color";
import CommandDescription from "../utility/CommandDescription";
import CommandDescriptions from "../utility/CommandDescriptions";
import Navigationbar from "../utility/NavigationBar";

export default class Commands extends React.Component {
    constructor(props) {
        super(props)
    }

    static commands = [
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        {syntax: 'play <song>', description: 'The bot plays a song'},
        {syntax: 'queue', description: 'The bot displays the currency music queue in order.'},
        
    ]

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