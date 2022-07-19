import { Component } from 'react';

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
