import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomepageView from './general_views/Homepage';
import LoginView from './general_views/LoginView';
import ProfileView from './general_views/ProfileView';


function App() {
  return (
       <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={HomepageView} />
                        <Route exact path={'/login/'} component={LoginView}/>
                        <Route exact path={'/profile/'} component={ProfileView} />
                    </Switch>
                  </BrowserRouter>
            </div>
       </Provider>
  );
}

export default App;
