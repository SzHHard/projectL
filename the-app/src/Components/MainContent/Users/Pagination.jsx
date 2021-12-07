import React from 'react';
import { connect } from 'react-redux';
import { fetchUsersTC } from '../../../State/usersReducer'

import { NavLink } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";

const Pagination = (props) => {

    let [searchParams, setSearchParams] = useSearchParams();

    let numbersArray = []
    for (let i = 1; i <= props.pagesAmount; i++) {
        numbersArray.push(i);

    }

    const gotoPageCreator = (pageNumber) => {
        return () => {
            return setSearchParams({ page: pageNumber })
        }
    }

    return (
        <div>

            {
                numbersArray.map((number) => {
                    return <span onClick={gotoPageCreator(number)}>  {number}  </span>
                })
            }

        </div>
    )


}

export default Pagination


// const mapStateToProps = (state) => {
//     return {
//         users: state.Users.usersArr,
//         totalUsers: state.Users.totalUsers,
//         usersPerPage: state.Users.usersPerPage,
//         pagesAmount: state.Users.pagesAmount,
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchUsersTC,
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)