import React from 'react';

class Card extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const {zoomOnHover}=this.props;

        return (
            <div className={zoomOnHover && "zoom-card" }>
                {this.props.children}
            </div>
        )
    }
}

export default Card;