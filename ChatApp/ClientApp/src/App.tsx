import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import './custom.css'
import ChatRooms from "./components/ChatRooms/ChatRooms";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import NewChatRoom from "./components/NewChatRoom/NewChatRoom";
import EditChatRoom from "./components/EditChatRoom/EditChatRoom";
import DeleteChatRoom from "./components/DeleteChatRoom/DeleteChatRoom";
import MessageBoard from "./MessageBoard/MessageBoard";

export default () => {

    return (
        <Layout>
                {localStorage.getItem("token") ? (
                    <Switch>
                        <Route exact path="/newchatroom" component={NewChatRoom}/>
                        <Route exact path="/:id/edit" component={EditChatRoom}/>
                        <Route exact path="/:id/delete" component={DeleteChatRoom}/>
                        <Route exact path="/:id" component={MessageBoard}/>
                    </Switch>
                ) : (
                    <>
                        <Route exact path="/signin" component={SignIn}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </>
                )}
                <Route exact path='/' component={ChatRooms}/>
                <Redirect to="/"/>


        </Layout>
    )
}
