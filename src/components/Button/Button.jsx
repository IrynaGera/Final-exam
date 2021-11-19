import React from 'react';
import './button.scss'

class Button extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false,
        };    
    };

    handleClick() {
        this.setState((prevState) => {
            return { active: !prevState.active }
        })
    }

    render() {
    
        return (
            <div>
                <div className="btn-holder">
                    <button type={this.props.type} className={`btn ${this.state.active ? 'active' : ''} ${this.props.className}`} onClick={(event) => this.handleClick(event)} style={{color: this.props.color, borderBlockColor: this.props.color}}>{this.props.name}</button>
                </div>
            </div> 
        )
    }
}

export default Button;