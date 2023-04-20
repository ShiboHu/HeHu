import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import CartNavBar from "./components/CartNavBar";
import CreateNewItem from "./components/ActionItemPage/createItem";
import Profile from "./components/Profile";
import UpdateItem from "./components/ActionItemPage/updateItem";
import SingleItem from "./components/SingleItemPage";

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
    {currentUser && 
    (location.pathname === "/" || location.pathname.startsWith('/items/')) 
    && <CartNavBar />}
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path='/'>
           <LandingPage />
          </Route>

          <Route path='/item/new'>
            <CreateNewItem />
          </Route>

          <Route path='/profile'>
            <Profile  />
          </Route>

          <Route path='/items/:itemId'>
            <SingleItem />
          </Route>
          
        </Switch>
      )}
    </>
  );
}

export default App;
