import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../App';
import SearchPage from './SearchPage';
import Photo from './Photo';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/Retina-Wallpapers/" component={App} exact />
            <Route path="/Retina-Wallpapers/search/:keyword" component={SearchPage} />
            <Route path="/Retina-Wallpapers/photo/:id" component={Photo} />
        </Switch>
    </BrowserRouter>
);

export default Router;