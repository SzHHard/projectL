import React from 'react'
//import PlayerFiltersBar from './PlayerFiltersBar'
import styles from './Filters.module.css'
import PlayerFiltersBarContainer from './PlayerFiltersBarContainer'

const Filters = (props ) => {

    return (    
        <div>
            <hr></hr>
            <h5>Фильтры:</h5>
            <PlayerFiltersBarContainer />
        </div>
    )
}

export default Filters;