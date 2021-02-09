import * as React from 'react';
import {Redirect, Route} from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import ChatRooms from "./components/ChatRooms/ChatRooms";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NewChatRoom from "./components/NewChatRoom/NewChatRoom";

export default () => {

    return (
        <Layout>
            <Route exact path='/' component={ChatRooms}/>
            {localStorage.getItem("token") ? (
                <div>
                    <Route exact path="/newchatroom" component={NewChatRoom}/>
                    {/*<Route exact path={"/signout"} component={() => dispatch(deleteLogin())}/>*/}
                </div>
            ) : (
                <>
                    <Route exact path="/signin" component={SignIn}/>
                    <Route exact path="/signup" component={SignUp}/>
                </>
            )}

            <Route path='/counter' component={Counter}/>
            <Route path='/fetch-data/:startDateIndex?' component={FetchData}/>
            <Redirect to="/"/>

        </Layout>
    )
}
