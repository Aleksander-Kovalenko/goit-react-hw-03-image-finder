import propTypes from "prop-types";
import { Component } from "react";

export class ImageGalleryItem extends Component {
  state = {
    selectedImages: "",
    descImages: "",
  };
  setImage = () => {
    const {
      largeImg,
      currentImg,
      image: { tags },
    } = this.props;

    currentImg(largeImg, tags);
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

ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
};
