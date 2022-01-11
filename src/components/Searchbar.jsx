import { Component } from "react";
import api from "./images-api";

export class SearchBar extends Component {
  state = {
    imageName: "",
    listImg: "",
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevProps.imageName;
  //   const nextName = this.props.imageName;
  //   if (prevName !== nextName) {
  //     api
  //       .fetchImages(nextName)
  //       .then((listImg) => this.setState({ listImg }))
  //       .catch((error) => this.setState({ error }));
  //   }
  // }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ imageName: value });
  };

  handleForm = (e) => {
    e.preventDefault();

    this.props.submitForm(this.state.imageName);
    this.setState({ imageName: "" });
  };

  render() {
    const { imageName } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={imageName}
          />
        </form>
      </header>
    );
  }
}
