import React from 'react';

class CardHeader extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        const {logo, logoAlt, title, period, location, additional} = this.props;

        return (
            <div>
                <div className="logo-container">
                    <img className="card-header-logo" src={logo} alt={logoAlt}></img>
                </div>
                <div className="card-header-detail">
                    <h5>{title}</h5>
                    <p>{period}</p>
                    <p>{location}</p>
                </div>
                {additional && (<p>{additional}</p>)}
            </div>
        )
    }
}

export default CardHeader;