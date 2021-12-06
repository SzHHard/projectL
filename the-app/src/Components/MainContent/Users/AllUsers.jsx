import React from 'react';
import {connect} from 'react-redux';
import {fetchUsersTC} from '../../../State/usersReducer'

class AllUsers extends React.Component {


    constructor(props) {
        super(props)

        // this.handleLoad = this.handleLoad.bind(this);
    }

    componentDidMount() {
        fetchUsersTC()(this.props.dispatch)
    }

    

    render() {
        return (
            <div> 
                {this.props.users.map((user) => {
                   return <div> {user.email} </div>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.Users
    }
}

const mapDispatchToProps = () => {
    return {
        fetchUsersTC,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers)