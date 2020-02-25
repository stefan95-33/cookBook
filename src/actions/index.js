import CookBookService from "../services/cookBook-service";
const { updateRecipes, postNewRecipes, getPreviousRecipes } = new CookBookService();

const getRecipesRequestAction = () => {
    return{
        type: 'FETCH_RECIPES_REQUEST'
    };
};

const getRecipesSuccessAction = (recipes) => {
    return{
        type: 'FETCH_RECIPES_SUCCESS',
        payload: recipes
    };
};

const getRecipesFailureAction = (error) => {
    return{
        type: 'FETCH_RECIPES_FAILURE',
        payload: error
    };
};

const addNewRecipeAction = (recipe) => {
    return{
        type: 'CREATE_RECIPE',
        payload: recipe
    };
};

const addNewRecipeOnServer = (recipe) => (dispatch) => {
    postNewRecipes(recipe)
        .then(({ data }) => {
            dispatch(addNewRecipeAction(data));
            console.log("created successful")
        })
        .catch((err) => {
            console.log(err)
        });
};

const getPreviousRecipesOnServer = (parentId) => (dispatch) =>{
    dispatch(getPreviousRecipesRequestAction());
    getPreviousRecipes(parentId)
        .then(({data}) => {
            dispatch(getPreviousRecipesSuccessAction(data));
        })
        .catch((err) => {
            dispatch(getPreviousRecipesFailureAction(err));
        });
};

const changeRecipeAction = (id, recipe) => {
    return{
        type: 'CHANGE_RECIPE',
        payload: {id, recipe}
    };
};

const changeRecipeOnServer = (recipe, id) => (dispatch) =>{
    updateRecipes(recipe, id)
        .then(() => {
            dispatch(changeRecipeAction(id, recipe));
            console.log("changed successful")
        })
        .catch((err) => {
            console.log(err)
        });
};

const getPreviousRecipesRequestAction = () => {
    return{
        type: 'FETCH_PREVIOUS_RECIPES_REQUEST'
    };
};

const getPreviousRecipesSuccessAction = (recipes) => {
    return{
        type: 'FETCH_PREVIOUS_RECIPES_SUCCESS',
        payload: recipes
    };
};

const getPreviousRecipesFailureAction = (err) => {
    return{
        type: 'FETCH_PREVIOUS_RECIPES_FAILURE',
        payload: err
    };
};

export {
    getRecipesRequestAction,
    getRecipesSuccessAction,
    getRecipesFailureAction,
    addNewRecipeOnServer,
    changeRecipeOnServer,
    getPreviousRecipesOnServer
};
