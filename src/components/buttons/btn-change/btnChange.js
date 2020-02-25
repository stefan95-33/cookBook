import React, { useState, useEffect } from "react";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
import { changeRecipeOnServer } from "../../../actions";
import { connect } from "react-redux";
import "./btnChange.css";

const BtnChangeRecipe = ({ recipe, changeRecipe }) => {
  const { title, ingredients, howToCook, _id } = recipe;
  const [show, setShow] = useState(false);
  const [recipes, setRecipes] = useState({ title, ingredients, howToCook });

  useEffect(() => {
    setRecipes({ title, ingredients, howToCook });
  }, [_id]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function changeRecipeClickHandler() {
    handleClose();
    changeRecipe(recipes.title, recipes.ingredients, recipes.howToCook, _id);
  }

  function handleChangeRecipes({ target }) {
    setRecipes({ ...recipes, [target.name]: target.value });
  }

  return (
    <>
      <ButtonToolbar onClick={handleShow}>
        <Button className="btnInsideDescription" variant="outline-primary">
          Change
        </Button>
      </ButtonToolbar>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Changing Recipe</Modal.Title>
        </Modal.Header>
        <form action=""></form>
        <Modal.Body>
          <div>Change recipe</div>
          <Form.Control
            value={recipes.title}
            onChange={handleChangeRecipes}
            type="text"
            name="title"
            placeholder="Title"
          />
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Enter Ingredients:</Form.Label>
              <Form.Control
                value={recipes.ingredients}
                name="ingredients"
                onChange={handleChangeRecipes}
                as="textarea"
                rows="3"
              />

              <Form.Label>How To Cook</Form.Label>
              <Form.Control
                value={recipes.howToCook}
                onChange={handleChangeRecipes}
                name="howToCook"
                as="textarea"
                rows="3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={changeRecipeClickHandler}>
            Change Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeRecipe: (title, ingredients, howToCook, id) =>
      changeRecipeOnServer(
        {
          title,
          ingredients,
          howToCook
        },
        id
      )(dispatch)
  };
};

export default connect(null, mapDispatchToProps)(BtnChangeRecipe);
