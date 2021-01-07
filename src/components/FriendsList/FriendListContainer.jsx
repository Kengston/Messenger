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
import {
    getCurrentPageSelector, getFollowingInProgressSelector, getIsFetchingSelector,
    getPageSizeSelector, getTotalUsersCountSelector, getUsersSelector
} from "../../redux/users-selectors";

class FriendsListContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
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
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
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