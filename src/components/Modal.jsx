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
  render() {
    const { image, tags } = this.props;

    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img src={image} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
