import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import CartNavBar from "./components/CartNavBar";
import Profile from "./components/Profile";
import SingleItem from "./components/SingleItemPage";
import CartPage from "./components/CartPage";
import CurrentUserItems from "./components/Profile/CurrentUserItems";
import CurrentUserComment from "./components/Profile/CurrentUserComment";
import CreateNewItem from "./components/Profile/CurrentUserCreateItem";
import SingleOrderPage from "./components/OrderPage";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import HoverFilter from "./components/HoverFilter";
import FilterItem from "./components/FitlerItemPage";
import SearchForKeyWord from "./components/SearchFilter";

function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const currentUser = useSelector(state => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {location.pathname !== '/login' && location.pathname !== '/signup' && <Navigation isLoaded={isLoaded} />}
      <div className="page-main-container">
        {isLoaded && (
          <>
            <Switch>
              <Route exact path='/'>
                <LandingPage />
              </Route>
  
              <Route path='/items/:itemId'>
                <SingleItem />
              </Route>

             <Route path='/subcategories/:subId'>
               <FilterItem />
              </Route>
            </Switch>
  
          <Route path='/search/:keyword'>
            <SearchForKeyWord />
          </Route>

          </>
        )}
        {currentUser && (location.pathname === "/" || location.pathname.startsWith('/items/') || location.pathname.startsWith('/search/') || location.pathname.startsWith('/subcategories/')) && <CartNavBar />}
        </div>
        <Switch>

          <Route exact path='/profile'>
            <Profile />
          </Route>

          <Route  path='/profile/items'>
            <CurrentUserItems />
          </Route>

          <Route  path='/profile/comments'>
            <CurrentUserComment />
          </Route>

          <Route  path='/profile/new/item'>
            <CreateNewItem />
          </Route>
  
          <Route path='/carts'>
            <CartPage />
          </Route>

          <Route path='/orders/:orderId'>
            <SingleOrderPage />
          </Route>

          <Route path='/login'>
            <LoginFormPage />
          </Route>

          <Route path='/signup'>
            <SignupFormPage />
          </Route>

          <Route path='/hover'>
            <HoverFilter />
          </Route>

        </Switch>
    </>
  );
}

export default App;
