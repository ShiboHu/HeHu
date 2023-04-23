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
      <Navigation isLoaded={isLoaded} />
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
            </Switch>
  
            {currentUser && (location.pathname === "/" || location.pathname.startsWith('/items/')) && <CartNavBar />}
          </>
        )}
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

        </Switch>
    </>
  );
}

export default App;
