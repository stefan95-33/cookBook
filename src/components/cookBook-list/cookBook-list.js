import React from "react";
import CookBookService from "../../services/cookBook-service";
const cookBookService = new CookBookService();

const CookBookList = () => {
    cookBookService.getBooks()
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

    return(
        <div>228</div>
    )
};

export default CookBookList