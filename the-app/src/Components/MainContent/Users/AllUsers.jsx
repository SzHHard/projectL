import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersTC } from '../../../State/usersReducer'
import Pagination from '../../common/Pagination';
import { useSearchParams } from "react-router-dom";
import { useEffect } from 'react';
import { Navigate } from 'react-router';

const AllUsers = (props) => {

    let [searchParams] = useSearchParams(1);
      
    useEffect(() => {
       
        const amountOnAPage = 4;
        const currentPage = parseInt(searchParams.get('page'));
        
        props.fetchUsersTC(amountOnAPage, (currentPage || 1))
    }, [searchParams.get('page')])


    const isLoggedIn = props.isLoggedIn;


    return   !isLoggedIn ? <Navigate to='/login' replace={true} /> 
    :(
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
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
        users: state.Users.usersArr,
        totalUsers: state.Users.totalUsers,
        pagesAmount: state.Users.pagesAmount,
    }
}


export default connect(mapStateToProps, {fetchUsersTC})(AllUsers)