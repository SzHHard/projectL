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
        const amountOnAPage = props.amountOnAPage;
        const currentPage = parseInt(searchParams.get('page'));

        const role = searchParams.get('role');
        console.log('role: ' + role)

        props.fetchCardsTC(amountOnAPage , (currentPage || 1), role)

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
        amountOnAPage: state.Players.amountOnAPage,
        isLoggedIn: state.CurrentUserInfo.isLoggedIn,
        // totalCards: state.Player.to
        pagesAmount: state.Players.pagesAmount,
    }
}


export default connect(mapStateToProps, { fetchCardsTC,  getMyCardsTC})(PlayersContainer)