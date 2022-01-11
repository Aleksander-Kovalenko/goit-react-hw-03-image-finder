import { Component } from "react/cjs/react.production.min";
import { ImageGalleryItem } from "./ImageGalleryItem";

export class ImageGallery extends Component {
  render() {
    const { items } = this.props;

    return (
      <ul className="ImageGallery">
        {items.hits.map((item) => (
          <ImageGalleryItem key={item.id} image={item} />
        ))}
      </ul>
    );
  }
}
