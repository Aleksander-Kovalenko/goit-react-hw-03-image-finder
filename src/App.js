import { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ImageGallery } from "./components/ImageGallery";
import api from "./components/images-api";
import { Modal } from "./components/Modal";
import { SearchBar } from "./components/Searchbar";

export class App extends Component {
  state = {
    imagesQuery: "",
    showModal: false,
    isLoader: false,
    listImages: [],
    error: null,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.imagesQuery;
    const nextQuery = this.state.imagesQuery;

    if (prevQuery !== nextQuery) {
      this.getImages();
    }
  }

  getImages = () => {
    const { page, imagesQuery } = this.state;
    const options = { page, imagesQuery };

    api
      .fetchImages(options)
      .then((listImages) => {
        this.setState((prevState) => ({
          listImages: [...prevState.listImages, ...listImages.hits],
          page: prevState.page + 1,
        }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      })
      .catch((error) => this.setState({ error }));
  };

  handleForm = (query) => {
    this.setState({ imagesQuery: query, showButton: true });
  };

  onToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { showModal, listImages } = this.state;
    return (
      <div className="App">
        <SearchBar submitForm={this.handleForm} />
        {listImages.length > 0 && (
          <>
            <ImageGallery items={listImages} />
            <Button handleClick={this.getImages} />
          </>
        )}
      </div>
    );
  }
}

export default App;
