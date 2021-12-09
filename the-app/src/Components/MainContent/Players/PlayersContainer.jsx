import React, {useEffect} from 'react';
import Players from './Players'
import {fetchCardsTC} from '../../../State/PlayersReducer'
import { connect } from 'react-redux';
import { useSearchParams } from "react-router-dom";



// import Pagination from '../../common';
    


const PlayersContainer = (props) => {

    let [searchParams, setSearchParams] = useSearchParams(1);

    useEffect(() => {
        const amountOnAPage = 2;
        const currentPage = parseInt(searchParams.get('page'));
        console.log(' ')
        props.fetchCardsTC(amountOnAPage, (currentPage || 1))
    
    }, [searchParams.get('page')] )

    return  (
        <div>
            <Players cardsArr = {props.cardsArr}/>

            {/* <Pagination pagesAmount={props.pagesAmount} /> */}

        </div>
    )

}



const mapStateToProps = (state) => {
    console.log(state.Players);
    return {
        cardsArr: state.Players.cardsArr,
       
       
        // totalCards: state.Player.to
        pagesAmount: state.Players.pagesAmount,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         ,
//     }
// }

export default connect(mapStateToProps,{fetchCardsTC})(PlayersContainer)