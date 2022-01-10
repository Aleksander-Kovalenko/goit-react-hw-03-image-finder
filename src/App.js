import { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ImageGallery } from "./components/ImageGallery";
import { ImagesAPI } from "./components/ImagesInfo";
import { Modal } from "./components/Modal";
import { SearchBar } from "./components/Searchbar";

export class App extends Component {
  state = {
    imagesQuery: null,
    showModal: false,
  };
  handleForm = (query) => {
    this.setState({ imagesQuery: query });
  };

  onToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  render() {
    const { imagesQuery, showModal } = this.state;
    return (
      <>
        <SearchBar submitForm={this.handleForm} />
        <ImagesAPI imagesQuery={imagesQuery} />
        {/* <ImageGallery imagesQuery={imagesQuery} /> */}
        {/* <Button /> */}
        {showModal && <Modal />}
      </>
    );
  }
}

export default App;
