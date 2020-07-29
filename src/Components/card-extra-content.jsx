import React from 'react';

class CardExtraContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isActive: false,
        }
    }

    handleShow = () => {
        this.setState({
            isActive: true,
        })
    }
    handleHide = () => {
        this.setState({
            isActive: false,            
        });
    }

    render(){
        return (
            <div>
                <i className="expand-arrow fa fa-angle-down" 
                onMouseOver={this.handleShow} 
                onMouseLeave={this.handleHide} 
                aria-hidden="true"></i>
                {this.state.isActive && this.props.children}
            </div>
        )
    }
}

export default CardExtraContent;