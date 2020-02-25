import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getRecipesRequestAction,
         getRecipesSuccessAction,
         getRecipesFailureAction } from "../../actions"
import CookBookService from "../../services/cookBook-service";
import CookBookListItem from "../cookBook-list-item";

const cookBookService = new CookBookService();

const CookBookList = (props) => {

    const { getRecipesRequestAction,
            getRecipesSuccessAction,
            getRecipesFailureAction,
            recipes,
            loading,
            error} = props;

    useEffect(() => {
        getRecipesRequestAction();
        cookBookService.getRecipes()
            .then(({data}) => getRecipesSuccessAction(data))
            .catch((err) => getRecipesFailureAction(err));
    }, []);

    if(loading){
        return <div>LOADING...</div>
    }

    if(error){
        return <div>ERROR</div>
    }

        return (
            <>
                {recipes.map((recipe) => {
                    return(
                        <CookBookListItem
                            key={recipe._id}
                            recipe={recipe}
                        />
                    )
                })}
            </>
        )
};

const mapDispatchToProps = {
    getRecipesRequestAction,
    getRecipesSuccessAction,
    getRecipesFailureAction
};

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        loading: state.loading,
        error: state.error
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CookBookList);