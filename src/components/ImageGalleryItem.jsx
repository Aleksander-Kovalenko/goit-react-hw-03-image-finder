export const ImageGalleryItem = ({ image }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.largeImageURL}
        alt={image.tags}
        data-sources={image.webformatURL}
      />
    </li>
  );
};
