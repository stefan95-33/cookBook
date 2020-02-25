import React from "react";
import {Accordion, Button, Card, Modal} from "react-bootstrap";
import {connect} from "react-redux";

const ModalPreviousRecipes = ({handleClose, prevRecipes, loadingPrevRecipes, show }) => {

    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Previous Recipes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    loadingPrevRecipes
                    ? <div>LOADING...</div>
                    : <Accordion defaultActiveKey="1">
                            {
                                prevRecipes.map(({title, ingredients, howToCook}) => {
                                    return(
                                        <Card>
                                            <Card.Header>
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    {title}
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <div>Ingredients: {ingredients}</div>
                                                    <div>HowToCook: {howToCook}</div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })
                            }
                        </Accordion>
                }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
};

const mapStateToProps = (state) => {
    return {
        prevRecipes: state.prevRecipes,
        loadingPrevRecipes: state.loadingPrevRecipes
    };
};

export default connect(mapStateToProps)(ModalPreviousRecipes);