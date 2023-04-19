import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useLocation } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import CartNavBar from "./components/CartNavBar";
import CreateNewItem from "./components/ActionItemPage/createItem";
import Profile from "./components/Profile";
import UpdateItem from "./components/ActionItemPage/updateItem";

function App() {
  const location = useLocation()
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
    {location.pathname === "/" && <CartNavBar />}
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>

          <Route exact path='/'>
          <LandingPage />
          </Route>

          <Route path='/item/new'>
            <CreateNewItem />
          </Route>

          <Route>
          <Profile path='/profile' />
          </Route>
          
        </Switch>
      )}
    </>
  );
}

export default App;
