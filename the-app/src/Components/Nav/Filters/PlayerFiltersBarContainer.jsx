import {connect} from 'react-redux';
import PlayerFiltersBar from './PlayerFiltersBar';
import { fetchCardsTC } from '../../../State/PlayersReducer';

const mapStateToProps = (state) => {
    return {

        amountOnAPage: state.Players.amountOnAPage,
    }
}

export default connect(mapStateToProps, {fetchCardsTC})(PlayerFiltersBar)