import './App.css';
import fetchImages from './services/Api';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import { Component } from 'react';

class App extends Component {
  state = {
    nameImage: '',
    arrayImage: [],
    page: 1,
    showModal: false,
    isLoading: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.nameImage !== this.state.nameImage) {
      this.getImages();
    }
  }

  getImages = () => {
    const { page, nameImage } = this.state;

    this.setState({
      isLoading: true,
    });

    try {
      fetchImages(nameImage, page).then(({ hits }) =>
        this.setState(prevState => ({
          arrayImage: [...prevState.arrayImage, ...hits],
          page: prevState.page + 1,
        })),
      );
    } catch (error) {
      console.log('Smth wrong with App fetch', error);
      this.setState('error');
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  onSubmit = data => {
    this.setState({
      nameImage: data.toLowerCase(),
      arrayImage: [],
    });
  };

  // onLoadMore = event => {
  //   console.log(event);
  //   this.setState(prevState => ({
  //     page: prevState.page + 1,
  //   }));
  // };

  togglModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  onclickImg = event => {
    // console.log(event, 'event');

    this.setState({
      largeImageURL: event,
    });

    this.togglModal();
  };

  render() {
    const { arrayImage, page, showModal, isLoading, largeImageURL } =
      this.state;
    const needToShowLoadMore = arrayImage.length >= 12;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {<Loader /> && (
          <ImageGallery nameImage={arrayImage} onClick={this.onclickImg} />
        )}
        {needToShowLoadMore && (
          <Button onPage={page} onLoadMore={this.getImages} />
        )}

        {showModal && (
          <Modal onClose={this.togglModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
