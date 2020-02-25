import React from "react";
import { Accordion, Button, Card, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { handleVisiblePrevItemModal } from "../../actions";

const ModalPreviousRecipes = ({
  prevRecipes,
  handleVisiblePrevItemModal,
  prevItemModalTrigger
}) => {
  return (
    <Modal
      show={prevItemModalTrigger}
      onHide={() => handleVisiblePrevItemModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Previous Recipes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!prevRecipes.length ? <div>No Data</div> : null}
        <Accordion defaultActiveKey="1">
          {prevRecipes.map(({ title, ingredients, howToCook, _id }) => {
            return (
              <Card key={_id}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={_id}>
                    {title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={_id}>
                  <Card.Body>
                    <div>Ingredients: {ingredients}</div>
                    <div>HowToCook: {howToCook}</div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => handleVisiblePrevItemModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  return {
    prevRecipes: state.prevRecipes,
    prevItemModalTrigger: state.prevItemModalTrigger
  };
};

const mapDispatchToProps = {
  handleVisiblePrevItemModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalPreviousRecipes);
