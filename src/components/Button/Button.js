import { Component } from 'react';

class Button extends Component {
  state = {
    more: false,
  };

  render() {
    return (
      <button
        onClick={this.props.onLoadMore}
        type="button"
        className="button-more"
      >
        Load more
      </button>
    );
  }
}
export default Button;
