import propTypes from "prop-types";
import { Component } from "react";
import { createPortal } from "react-dom";
const modalRoot = document.querySelector("#modal-root");

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown = (e) => {
    const { code } = e;

    if (code === "Escape") {
      this.props.onToggleModal();
    }
  };

  handleBackdropClick = (e) => {
    const clickToBackdrop = e.currentTarget === e.target;
    if (clickToBackdrop) this.props.onToggleModal();
  };
  render() {
    const { image, tags } = this.props;

    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={image} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
Modal.propTypes = {
  image: propTypes.string.isRequired,
  tags: propTypes.string.isRequired,
  onToggleModal: propTypes.func.isRequired,
};
