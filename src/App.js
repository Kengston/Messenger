import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialog from "./components/Dialogs/Dialogs";
import FriendListContainer from "./components/FriendsList/FriendListContainer";
import Preferences from "./components/Preferences/Preferences";
import {Route} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {

    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='content'>
                    <Route path='/Profile/:userId?' render={ () => <ProfileContainer state={props.state.profilePage}/> }/>
                    <Route path='/Dialogs' render={ () => <Dialog state={props.state.dialogsPage}/> }/>
                    <Route path='/FriendsList' render={ () => <FriendListContainer state={props.state.usersPage}/> }/>
                    <Route path='/Preferences' component={Preferences} />
                    <Route path='/Login' render={ () => <Login /> } />
                </div>
            </div>
    );
}

export default App;
