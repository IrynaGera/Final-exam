import React, { Component } from 'react';
import './modal.scss';
import Input from '../Input';
import Button from '../Button';

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  handleClick(event) {
    this.setState((prevState) => {
      return { open: !prevState.open };
    });
  }

  render() {
    return (
      <>
        <form action="https://postman-echo.com/post" method="POST" className={`modal ${this.state.open ? 'open' : ''}`}>
          <Input type="text" name="text" className="modal__text" placeholder="Your name*"/>
          <Input type="email" name="email" className="modal__email" placeholder="Your email*" />
          <Input type="textarea" name="textarea" className="modal__textarea" placeholder="Your message*" />
          <Button name="send" type="submit" className="modal__send"/>
          <a className="modal__close" onClick={(event) => this.handleClick(event)}></a>
        </form>
        <button onClick={(event) => this.handleClick(event)} className="modal__btn">Contact us</button>
      </>
    );
  }
}

export default Modal;
