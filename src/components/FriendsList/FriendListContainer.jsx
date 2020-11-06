import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/User-reducer";
import FriendList from './FriendList'
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class FriendsListContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        if (this.props.isAuth == false) return <Redirect to={"/Login"}/>

        return <>
            { this.props.isFetching ? <Preloader /> : <FriendList totalUsersCount = {this.props.totalUsersCount}
                                                                  pageSize = {this.props.pageSize}
                                                                  onPageChanged = {this.onPageChanged}
                                                                  currentPage = {this.props.currentPage}
                                                                  users = {this.props.users}
                                                                  follow = {this.props.follow}
                                                                  unfollow = {this.props.unfollow}
                                                                  followingInProgress = {this.props.followingInProgress}
            />}
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
) (FriendsListContainer)