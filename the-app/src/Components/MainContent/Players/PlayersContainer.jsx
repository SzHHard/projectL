import React, { useEffect } from 'react';
import Players from './Players'
import { fetchCardsTC } from '../../../State/PlayersReducer'
import { connect } from 'react-redux';
import { useSearchParams } from "react-router-dom";
import Pagination from '../../common/Pagination'
import MyCardsButton from './MyCardsButton'
import { getMyCardsTC } from '../../../State/PlayersReducer'

const PlayersContainer = (props) => {

    let [searchParams] = useSearchParams(1);

    useEffect(() => {
        const amountOnAPage = 2;
        const currentPage = parseInt(searchParams.get('page'));
        props.fetchCardsTC(amountOnAPage, (currentPage || 1))

    }, [searchParams.get('page')])

    useEffect(() => {
        props.getMyCardsTC()

    }, [props.isLoggedIn])

    return (
        <div>
            <MyCardsButton />
            <Players cardsArr={props.cardsArr} />

            <Pagination pagesAmount={props.pagesAmount} />

        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        cardsArr: state.Players.cardsArr,

        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
        // totalCards: state.Player.to
        pagesAmount: state.Players.pagesAmount,
    }
}


export default connect(mapStateToProps, { fetchCardsTC,  getMyCardsTC})(PlayersContainer)