import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialog from "./components/Dialogs/Dialogs";
import FriendListContainer from "./components/FriendsList/FriendListContainer";
import Preferences from "./components/Preferences/Preferences";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='content'>
                    <Route path='/Profile' render={ () => <ProfileContainer state={props.state.profilePage}/> }/>
                    <Route path='/Dialogs' render={ () => <Dialog state={props.state.dialogsPage}/> }/>
                    <Route path='/FriendsListAPI' render={ () => <FriendListContainer state={props.state.usersPage}/> }/>
                    <Route path='/Preferences' component={Preferences} />
                </div>
            </div>
    );
}

export default App;
