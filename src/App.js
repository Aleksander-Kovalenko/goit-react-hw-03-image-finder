import { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ImageGallery } from "./components/ImageGallery";
import api from "./components/images-api";
import { ImagesAPI } from "./components/ImagesInfo";
import { Modal } from "./components/Modal";
import { SearchBar } from "./components/Searchbar";

export class App extends Component {
  state = {
    imagesQuery: "",
    showModal: false,
    listImages: null,
    error: null,
    page: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.imagesQuery;
    const nextQuery = this.state.imagesQuery;
    if (prevQuery !== nextQuery) {
      api
        .fetchImages(nextQuery)
        .then((listImages) => this.setState({ listImages }))
        .catch((error) => this.setState({ error }));
    }
  }
  handleClickModal = () => {
    const { imagesQuery, page } = this.state;
    this.setState((prevState) => ({ page: prevState.page + 1 }));
    api.fetchImages(imagesQuery, page);
  };

  handleForm = (query) => {
    this.setState({ imagesQuery: query });
  };

  onToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { showModal, listImages, handleClickModal } = this.state;
    return (
      <>
        <SearchBar submitForm={this.handleForm} />
        {listImages && (
          <>
            <ImageGallery items={listImages} />
            <Button handleClick={handleClickModal} />
          </>
        )}
        {/* <ImagesAPI imagesQuery={imagesQuery} /> */}
        {/* <ImageGallery imagesQuery={imagesQuery} /> */}
        {/* <Button /> */}
        {/* {showModal && <Modal />} */}
      </>
    );
  }
}

export default App;
