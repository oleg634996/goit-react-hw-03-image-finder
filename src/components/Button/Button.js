import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className="button-more"
        onClick={this.props.onButton}
      >
        Load more
      </button>
    );
  }
}
export default Button;
Button.propTypes = {
  onButton: PropTypes.func,
};
