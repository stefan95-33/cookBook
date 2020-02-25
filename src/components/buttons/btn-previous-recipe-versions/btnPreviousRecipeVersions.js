import React, {useState, useRef} from "react";
import { Button, ButtonToolbar, Overlay, Tooltip } from 'react-bootstrap';
import { getPreviousRecipesOnServer } from "../../../actions";
import ModalPreviousRecipes from "../../modals/modalPreviousRecipes";
import {connect} from "react-redux";

const BtnPreviousRecipeVersions = ({prevRecipeDispatch, id, prevRecipes}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function getPrevRecipes() {
        handleShow();
        prevRecipeDispatch(id)
    }

    return (
        <>
            <ButtonToolbar onClick={getPrevRecipes}>
                <Button variant="outline-primary">Prev. Recipes</Button>
            </ButtonToolbar>
            <ModalPreviousRecipes
                handleClose={handleClose}
                show={show} />
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return{
        prevRecipeDispatch: (id) => getPreviousRecipesOnServer(id)(dispatch)
    }
};

export default connect(null, mapDispatchToProps)(BtnPreviousRecipeVersions);

