import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import ChatRooms from "./components/ChatRooms/ChatRooms";
import SignIn from "./components/SignIn/SignIn";

export default () => (
    <Layout>
        <Route exact path='/' component={ChatRooms} />
        <Route exact path="/signin" component={SignIn} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
        
    </Layout>
);
