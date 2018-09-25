import * as React from "react";
import * as ReactDOM from "react-dom";
import createSagaMiddleware from 'redux-saga'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { Route, HashRouter, Switch } from 'react-router-dom';
import  App from './App';
import UserContent from './components/user/userContent';
import rootSaga from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,  
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
           
    <Provider store={store}> 

    <div>            
        <HashRouter>
        <div className="container-fluid">
        <Route component={App} />
        <Switch>
            <Route exact path="/" component={UserContent} />                   
        </Switch>
        </div>
    </HashRouter>
       
    </div>   
    </Provider>,
    document.getElementById("root")
);
