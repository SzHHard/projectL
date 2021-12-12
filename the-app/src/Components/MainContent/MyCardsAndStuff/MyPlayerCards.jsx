import React, { useEffect } from 'react'
import { getMyCardsTC } from '../../../State/PlayersReducer'
import { connect } from 'react-redux'
import Players from '../Players/Players'

const MyPlayerCards = (props) => {

    useEffect(() => {
        props.getMyCardsTC()
    }, [])

    //получаю из стейта мои карты, вывожу через players (?)
    return props.cardsArr ? (
        <div>
            <Players cardsArr={props.cardsArr} />
        </div>
    )
    : null
}
const mapStateToProps = (state) => {
    console.log(state.Players.myCardsArr)
    return {
        cardsArr: state.Players.myCardsArr
    }
}

export default connect(mapStateToProps, { getMyCardsTC })(MyPlayerCards)