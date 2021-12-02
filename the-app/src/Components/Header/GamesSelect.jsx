import React from 'react'
import stylesGamesSelect from './GamesSelect.module.css'

class GamesSelect extends React.Component {

    render() {

        return (
            <div className = {stylesGamesSelect.selectGame}> 
                <select defaultValue = {'League Of Legends'}>
                    <option>League of Legends</option>
                </select>
            </div>
        ) 
    }
}

export default GamesSelect;