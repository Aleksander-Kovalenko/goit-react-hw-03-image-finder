import propTypes from "prop-types";
import { Component } from "react/cjs/react.production.min";
import { ImageGalleryItem } from "./ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="ImageGallery">
        {items.map((item) => (
          <ImageGalleryItem
            key={item.id}
            largeImg={item.largeImageURL}
            image={item}
            currentImg={this.props.currentImg}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  items: propTypes.array.isRequired,
};
