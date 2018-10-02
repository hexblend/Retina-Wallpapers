import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import SearchPage from './SearchPage';
import Photo from './Photo';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/search/:keyword" component={SearchPage} />
            <Route path="/photo/:id" component={Photo} />
        </Switch>
    </BrowserRouter>
);

export default Router;