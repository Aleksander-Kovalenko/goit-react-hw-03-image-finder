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
      return;
    }
  };
  render() {
    return (
      createPortal(
        <div className="Overlay">
          <div className="Modal">
            <img src="" alt="" />
          </div>
        </div>
      ),
      modalRoot
    );
  }
}
