import { connect } from 'react-redux'
import AllUsers from './AllUsers'
import { fetchUsersTC } from '../../../State/usersReducer';

import React from 'react';

class AllUsersContainer extends React.Component {

    componentDidMount() {

        console.log('consolelog-componentDidMount')
        fetchUsersTC();
    }

    componentDidUpdate() {
        fetchUsersTC();
        console.log('consolelog-componentDidUpdate')
    }

    render() {
        fetchUsersTC();
        return (
            <AllUsers {...this.props}/>
        )
    }
}




const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
}

export default connect(mapStateToProps, {fetchUsersTC})(AllUsersContainer)