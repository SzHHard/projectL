import React from 'react'
import StylesSearch from './Search.module.css'

 class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    handleInput = (event) => {
        this.setState({searchInput: event.target.value}) 
    }


    render() {
        return (
            <div className={StylesSearch.searchBar}>
                <input type='text' 
                    value = {this.state.searchInput} 
                    onChange = {this.handleInput}
                    placeholder = {'Search'} > 
                </input>
            </div>
        )
    }
}

export default Search;