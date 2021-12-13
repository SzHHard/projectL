import React, { useEffect } from 'react'
import { getMyCardsTC } from '../../../State/PlayersReducer'
import { connect } from 'react-redux'
import Players from '../Players/Players'

const MyPlayerCards = (props) => {

    useEffect(() => {

        props.getMyCardsTC()
    }, [props.isLoggedIn])

    //получаю из стейта мои карты, вывожу через players (?)
    return props.cardsArr ? (
        <div>
            <Players cardsArr={props.cardsArr} />
        </div>
    )
    : null
}
const mapStateToProps = (state) => {

    return {
        cardsArr: state.Players.MyCardsArr,
        isLoggedIn: state.CurrentUserInfo.isLoggedIn
    }
}

export default connect(mapStateToProps, { getMyCardsTC })(MyPlayerCards)