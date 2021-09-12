import React from "react";
import color from "./color";

import { motion } from "framer-motion";

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
        <motion.div
            animate={{ x: 20 }}
            transition={{ yoyo: 1}}
        >
        <nav>
        <ul>
            <li><a style = {Navigationbar.linkStyle} href = '/'>Home Page</a></li>
            <li><a style = {Navigationbar.linkStyle} href = '/commands'>Commands</a></li>
        
     
        </ul>
        </nav>
        </motion.div>
        )

        
    }

}