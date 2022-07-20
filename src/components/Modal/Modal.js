import { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div
        className="overlay"
        onClick={event => {
          if (event.target.className) {
            this.props.onClose();
          }
        }}
      >
        <div className="modal">
          <img src={this.props.onOpenImg} alt="" />
        </div>
      </div>
    );
  }
}
export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func,
  onOpenImg: PropTypes.string,
};
