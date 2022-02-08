import { Component } from 'react/cjs/react.production.min';

class Searchbar extends Component {
  state = {
    name: '',
  };

  onChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    const { name } = this.state;
    if (name.trim() === '') {
      alert('Error Notification !');
      return;
    }
    this.props.onSubmit(name.toLowerCase());
    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmitForm}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.onChange}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.name}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
