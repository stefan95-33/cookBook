import React, { useState, useRef } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { getPreviousRecipesOnServer } from "../../../actions";
import { connect } from "react-redux";

const BtnPreviousRecipeVersions = ({
  prevRecipeDispatch,
  id,
  loadingPrevRecipes
}) => {
  function getPrevRecipes() {
    prevRecipeDispatch(id);
  }

  return (
    <React.Fragment>
      <ButtonToolbar>
        <Button onClick={getPrevRecipes} variant="outline-primary">
          {loadingPrevRecipes ? "Loading..." : "Prev. Recipes"}
        </Button>
      </ButtonToolbar>
    </React.Fragment>
  );
};

const mapStateToProps = (state, props) => {
  return {
    loadingPrevRecipes: props.id === state.loadingPrevRecipes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    prevRecipeDispatch: id => getPreviousRecipesOnServer(id)(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BtnPreviousRecipeVersions);
