import React from "react";
import Profile from "./Profile";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/Profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    profileUpdate() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorithedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.profileUpdate()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.profileUpdate()
        }
    }

    render() {

        return (
            <Profile {...this.props}
                     isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorithedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose (
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
) (ProfileContainer);


