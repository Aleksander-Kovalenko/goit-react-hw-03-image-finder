import { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { ImageGallery } from "./components/ImageGallery";
import { SearchBar } from "./components/Searchbar";

export class App extends Component {
  state = {
    images: null,
  };
  handleForm = (data) => {
    console.log(data);
  };
  render() {
    const { images } = this.state;
    return (
      <>
        <SearchBar submitForm={this.handleForm} />
        <ImageGallery items={images} />
        <Button />
      </>
    );
  }
}

export default App;
