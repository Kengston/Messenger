import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/User-reducer";
import FriendList from './FriendList'
import Preloader from "../common/Preloader/Preloader";

class FriendsListAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
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
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}) (FriendsListAPI);