import propTypes from "prop-types";

export const Button = ({ handleClick }) => {
  return (
    <button type="submit" className="Button" onClick={handleClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  handleClick: propTypes.func.isRequired,
};
