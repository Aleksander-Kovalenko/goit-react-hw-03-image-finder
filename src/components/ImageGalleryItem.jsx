import { Component } from "react";

export class ImageGalleryItem extends Component {
  setImage = () => {
    this.props.currentImg(this.props.largeImg, this.props.image.tags);
  };
  render() {
    const { webformatURL, tags } = this.props.image;
    return (
      <li className="ImageGalleryItem">
        <img
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt={tags}
          onClick={() => this.setImage()}
        />
      </li>
    );
  }
}
