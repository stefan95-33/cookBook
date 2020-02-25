import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { BtnChangeRecipe, BtnPreviousRecipeVersions } from "../buttons";
import "./style.css";

const CookBookListItem = ({ recipe }) => {
  const { title, ingredients, howToCook, _id } = recipe;
  const [ChangeColor, setChangeColor] = useState(null);

  function titleColor() {
    !ChangeColor ? setChangeColor("#CCFFCC") : setChangeColor(null);
  }

  return (
    <Accordion defaultActiveKey="1" className="accordion">
      <Card>
        <Accordion.Toggle
          onClick={titleColor}
          style={{ backgroundColor: ChangeColor }}
          as={Card.Header}
          eventKey="0"
          className="accordionTitle"
        >
          <p>{title}</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <b>Ingredients:</b>
            <br />
            {ingredients}
            <br />
            <b>How To Cook:</b>
            <br />
            {howToCook}
            <div className="buttonsInside">
              <BtnChangeRecipe recipe={recipe} />
              <BtnPreviousRecipeVersions id={_id} />
            </div>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default React.memo(CookBookListItem);
