import React from 'react';
import CookBookList from '../cookBook-list'
import { BtnAddRecipes } from '../buttons'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => {
    return (
        <>
            <div className="footer">
                <h1>Cook Book</h1>
                <h6>Cook With Pleasure</h6>
                <BtnAddRecipes/>
            </div>
            <div className="footerBottom">
                <h2>Recipes</h2>
            </div>
            <div className="bookList">
                <CookBookList/>
            </div>
        </>
    );
};

export default App;