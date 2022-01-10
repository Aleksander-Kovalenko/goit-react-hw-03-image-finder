import { Component } from "react";
import { ImageGallery } from "./ImageGallery";
import api from "./images-api";

export class ImagesAPI extends Component {
  state = { images: null, error: null };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imagesQuery;
    const nextName = this.props.imagesQuery;
    if (prevName !== nextName) {
      api
        .fetchImages(nextName)
        .then((images) => this.setState({ images }))
        .catch((error) => this.setState({ error }));
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <ImageGallery items={images?.hits} />
      </>
    );
  }
}
