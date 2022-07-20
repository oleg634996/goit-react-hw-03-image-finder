import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    title: '',
  };

  onSubmitForm = event => {
    const { title } = this.state;
    event.preventDefault();
    // const eventValue = event.target[1].value;
    // console.log(eventValue);

    if (title.trim() === '') {
      return toast('введите названия');
    }

    this.props.onSubmit(title.toLowerCase());
    // this.reset();
  };

  onChange = event => {
    const inputValue = event.target.value;
    this.setState({ title: inputValue });
  };

  reset = () => {
    this.setState({ title: '' });
  };

  render() {
    // console.log(this.state.title);
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="on"
            autoFocus
            onMouseDown={() => this.reset()}
            onChange={this.onChange}
            value={this.state.title}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.string,
};
