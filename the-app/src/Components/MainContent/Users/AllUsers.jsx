import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersTC } from '../../../State/usersReducer'
import Pagination from './Pagination';
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';

const AllUsers = (props) => {

    let [searchParams, setSearchParams] = useSearchParams(1);
      
    useEffect(() => {
       
        const amountOnAPage = 4;
        const currentPage = parseInt(searchParams.get('page'));
        debugger;
        props.fetchUsersTC(amountOnAPage, (currentPage || 1))
    }, [searchParams.get('page')])


    return (
        <div>
            {props.users.map((user) => {
                return <div key={user._id}> {user.email} </div>
            })}

            <Pagination pagesAmount={props.pagesAmount} />

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.Users.usersArr,
        totalUsers: state.Users.totalUsers,
        pagesAmount: state.Users.pagesAmount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsersTC,
    }
}

export default connect(mapStateToProps, {fetchUsersTC})(AllUsers)