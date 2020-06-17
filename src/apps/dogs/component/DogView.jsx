import React, { Component } from "react";

import { connect } from "react-redux";
import { Button } from "@material-ui/core";

class DogView extends Component {
  render() {
    const { fetching, dog, error, onRequestDog } = this.props;
    console.log(">>>>>", dog);

    return (
      <div>
        {dog ? (
          <p>Keep clicking for new dogs</p>
        ) : (
          <p>Replace the React icon with a dog!</p>
        )}

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <div>
            <Button variant="contained" color="primary" onClick={onRequestDog}>
              Request a Dog
            </Button>
            <br />
            <img src={dog.dog} alt="logo" />
          </div>
        )}

        {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    dog: state.dogs,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestDog: () => dispatch({ type: "API_CALL_REQUEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DogView);
