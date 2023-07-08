import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Repos from "./components/Repos";
import Login from "./components/Login";
import { initialState, reducer } from "./store/reducer";


export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("initial state", initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/callback" component={Login}/>
        <Route path="/repos" component={Repos}/>
      </Switch>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;
