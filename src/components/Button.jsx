import api from "./images-api";

export const Button = ({ handleClick }) => {
  return (
    <button type="submit" className="Button" onClick={handleClick}>
      Load More
    </button>
  );
};
