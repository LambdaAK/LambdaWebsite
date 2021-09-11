import React from "react";

export default class Comment extends React.Component {
    constructor(props) {
        super(props)
    }

    static style = {
        backgroundColor: "gray",
        color: "gray"
    }

    render() {
        return (
            <div style={Comment.style}>
                <textarea>
                    {this.props.content}
                </textarea>

            </div>
        )
    }
}