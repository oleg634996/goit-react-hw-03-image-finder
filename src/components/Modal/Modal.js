import { Component } from 'react';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div onClick={this.props.onClose} className="overlay">
        <div className="modal">
          <img src={this.props.onOpenImg} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;
