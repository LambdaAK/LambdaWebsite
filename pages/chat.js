import React from "react";
import Comment from "../components/Comment";

export default class Chat extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Comment content="comment" />
            </div>
        )
    }
}