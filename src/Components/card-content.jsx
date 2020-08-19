import React from 'react';
import "../pages/card.css"

class CardContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content">
                <p id="text">{this.props.text}</p>
            </div>
        )
    }
}

export default CardContent;