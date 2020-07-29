import React from 'react';

class CardContent extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <p id="text">{this.props.text}</p>
        )
    }
}

export default CardContent;