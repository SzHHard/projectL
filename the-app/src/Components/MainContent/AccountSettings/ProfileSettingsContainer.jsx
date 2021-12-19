import React, { useEffect } from 'react'
import ProfileSettings from './ProfileSettings'
import {connect} from 'react-redux';

import {updateProfileImageTC} from '../../../State/CurrentUserReducer';



const mapStateToProps = (state) => {

    return {

    }
}

export default connect(mapStateToProps, {updateProfileImageTC})(ProfileSettings);

