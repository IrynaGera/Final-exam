import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { type, name, className, placeholder } = this.props;

    return (
      <>
        <div >
          <input type={type || 'text'} name={name} placeholder={placeholder} className={className} />        
        </div>
      </>
    );
  }
}

export default Input;