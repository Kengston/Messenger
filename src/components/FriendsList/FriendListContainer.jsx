import React from "react";
import { connect } from "react-redux";
import {
    follow,
    setCurrentPage,
    setUsers,
    setTotalUsersCount, toggleIsFetching,
    unfollow
} from "../../redux/User-reducer";
import * as axios from 'axios'
import FriendList from './FriendList'
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class FriendsListAPI extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items);
            });
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
        isFetching: state.usersPage.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUserAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) (FriendsListAPI);