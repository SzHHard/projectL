
import React from 'react';
import Player from './Player';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {

    return {
        MyCardsArr: state.Players.MyCardsArr,
    }
}

export default connect(mapStateToProps, {})(Player);