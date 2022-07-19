import { Component } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import fetchImages from './services/Api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

class App extends Component {
  state = {
    title: '',
    page: 1,
    searhImg: [],
    showModal: false,
    largeImageURL: '',
    totalHits: null,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page, title } = this.state;
    if (prevState.title !== title || prevState.page !== page) {
      fetchImages(page, title).then(response => {
        this.setState(prevState => ({
          searhImg: [...prevState.searhImg, ...response.hits],
          totalHits: response.totalHits,
          isLoading: false,
        }));
      });
      // console.log(prevState.page, 'prevstate');
      // console.log(page, 'page');
      // console.log(prevState.title, 'prevtitle');
      // console.log(title);
    }
  }

  onSubmit = data => {
    console.log(data, 'data');
    this.setState({
      title: data,
      searhImg: [],
      page: 1,
      isLoading: true,
    });
    toast.warn(`по этому запросу  не чего нет`);
  };

  btnMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      isLoading: true,
    }));
  };

  onClickImg = event => {
    this.setState({ largeImageURL: event });
    this.togglModal();
  };

  togglModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { searhImg, showModal, largeImageURL, totalHits, page, isLoading } =
      this.state;
    const showBtnMore = totalHits / 12 > page;

    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {searhImg < 1 && <ToastContainer />}

        <ImageGallery onRenderImg={searhImg} onClick={this.onClickImg} />
        {isLoading && <Loader />}
        {showBtnMore && <Button onButton={this.btnMore} />}
        {showModal && (
          <Modal onClose={this.togglModal} onOpenImg={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
