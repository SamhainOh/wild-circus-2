import { Route, Switch } from 'react-router-dom';

import React from 'react'
import HomePage from '../home_page/HomePage';
import AboutPage from '../about_us/AboutPage';
import PerformancesPage from '../performances/PerformancesPage';
import DatesPage from '../dates&tickets/DatesPage';
import ShopPage from '../shop/ShopPage';
import ContactPage from '../contact/ContactPage';

export default function Router() {
    return (
        <Switch>
            <Route path='/Home' component={HomePage}/>
            <Route path='/About' component={AboutPage}/>
            <Route path='/Performances' component={PerformancesPage}/>
            <Route path='/Dates' component={DatesPage}/>
            <Route path='/Shop' component={ShopPage}/>
            <Route path='/Contact' component={ContactPage}/>
        </Switch>
    )
}
