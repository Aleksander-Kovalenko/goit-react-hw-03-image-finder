import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
    isLoading: false,
    listImages: [],
    currentImg: "",
    tags: "",
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
    this.setState({ isLoading: true });

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
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  getLargeImages = (selectedImages, descImages) => {
    this.setState({
      currentImg: selectedImages,
      tags: descImages,
    });

    this.onToggleModal();
  };

  handleForm = (query) => {
    this.setState({
      imagesQuery: query,
      showButton: true,
      listImages: [],
    });
  };

  onToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { listImages, isLoading, showModal, currentImg, tags } = this.state;
    return (
      <div className="App">
        <SearchBar submitForm={this.handleForm} />
        {listImages.length > 0 && (
          <>
            <ImageGallery items={listImages} currentImg={this.getLargeImages} />
            <Button handleClick={this.getImages} />
          </>
        )}
        {isLoading && (
          <TailSpin
            className="loader"
            wrapperStyle={{ justifyContent: "center" }}
          />
        )}

        {showModal && (
          <Modal
            image={currentImg}
            tags={tags}
            onToggleModal={this.onToggleModal}
          />
        )}
      </div>
    );
  }
}

export default App;
