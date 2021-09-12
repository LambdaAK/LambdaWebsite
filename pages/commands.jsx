import React from "react";
import color from "../utility/color";
import CommandDescription from "../utility/CommandDescription";
import CommandDescriptions from "../utility/CommandDescriptions";
import Navigationbar from "../utility/NavigationBar";
import Swup from 'swup'
import allCommands from "../utility/allCommands";
import { AnimatePresence, motion } from "framer-motion";

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
            <AnimatePresence exitBeforeEnter={true}>
            <motion.div initial = {{ opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0}} style = {Commands.topDivStyle}>
            <Navigationbar/>
            <CommandDescriptions commands = {Commands.commands}/>
            </motion.div>
            </AnimatePresence>
        )
    }
}