import React from "react";
import Create from "../Create";
import { Link } from 'react-router-dom';

class PlayerForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { locationText: '', aim: 'Player', categories: ['cat5', 'cat6'] }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleCreatePlayer = this.handleCreatePlayer.bind(this)
    
    }


    handleInputChange(e) {
        this.setState({ locationText: e.target.value })
    }

    handleRadioChange(e) {
        this.setState({ aim: e.target.value })
    }

    handleCreatePlayer() {
        let newPlayerCard = {profileImg: this.state.locationText, mainInfo: this.state.locationText, rankIcon: this.state.aim, categories: this.state.categories};
        this.props.handleSubmit(newPlayerCard);
    }

    render() {
        return (

            <Create>
                <div>
                    <form onSubmit = {this.handleSubmit}>
                        <ul>
                            <li>
                                <label>
                                    <input type='radio' value='Player' onChange={this.handleRadioChange} checked={this.state.aim === 'Player'} />
                                    I'm just looking for a mate!)
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' value='Team' onChange={this.handleRadioChange} checked={this.state.aim === 'Team'} />
                                    Looking for a team!
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' value='Animal' onChange={this.handleRadioChange} checked={this.state.aim === 'Animal'} />
                                    Oh, I'm looking for Lillia! ~Йип?
                                </label>
                            </li>
                        </ul>
                        <div>
                            <div>Location:</div>
                            <label>
                                <input onChange={this.handleInputChange} placeHolder='The Nation of Zaun' value={this.state.locationText} />
                            </label>
                        </div>

                        <textarea placeHolder='Share your interests and goals'> </textarea>

                        <Link to={'/success'}>
                            <input type='button' onClick = {this.handleCreatePlayer} value='Complete' />
                        </Link>
                    </form>
                </div>
            </Create>
        )
    }
}

export default PlayerForm;