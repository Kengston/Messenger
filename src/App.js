import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Preferences from "./components/Preferences/Preferences";
import {withRouter, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const Dialog = React.lazy(() => import('./components/Dialogs/Dialogs'))
const FriendListContainer = React.lazy(() => import('./components/FriendsList/FriendListContainer'))

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content'>
                    <Route path='/Profile/:userId?'
                           render={() => <ProfileContainer state={this.props.state.profilePage}/>}/>
                    <Route path='/Dialogs' render={() => <Dialog state={this.props.state.dialogsPage}/>}/>
                    <Route path='/FriendsList'
                           render={() => <FriendListContainer state={this.props.state.usersPage}/>}/>
                    <Route path='/Preferences' component={Preferences}/>
                    <Route path='/Login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})) (App);
