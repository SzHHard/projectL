import React from "react";
import Create from "../Create";
import { Link } from 'react-router-dom';

class TeamForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = { locationText: '', aim: 'Player', categories: ['cat5', 'cat6'] }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleRadioChange = this.handleRadioChange.bind(this)
        this.handleCreateTeam = this.handleCreateTeam.bind(this)
    }


    handleInputChange(e) {
        this.setState({ locationText: e.target.value })
    }

    handleRadioChange(e) {
        this.setState({ aim: e.target.value })
    }


    handleCreateTeam() {
        let newTeamCard = { rankIcon: this.state.locationText, teamLogo: this.state.aim, mainInfo: this.state.locationText, categories: this.state.categories }
        console.log(newTeamCard)
        debugger
        this.props.handleSubmit(newTeamCard);
    }


    render() {
        return (

            <Create>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <ul>
                            <li>
                                <label>
                                    <input type='radio' value='Player' onChange={this.handleRadioChange} checked={this.state.aim === 'Player'} />
                                    Chill
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' value='Team' onChange={this.handleRadioChange} checked={this.state.aim === 'Team'} />
                                    Team experiance
                                </label>
                            </li>
                            <li>
                                <label>
                                    <input type='radio' value='Animal' onChange={this.handleRadioChange} checked={this.state.aim === 'Animal'} />
                                    Oh, we're looking for Lillia! ~Йип?
                                </label>
                            </li>
                        </ul>
                        <div>
                            <div>Location:</div>
                            <label>
                                <input onChange={this.handleInputChange} placeHolder='Piltover' value={this.state.locationText} />
                            </label>
                        </div>

                        <textarea placeHolder='Share your interests and goals'> </textarea>

                        <Link to={'/success'}>
                            <input type='button' onClick={this.handleCreateTeam} value='Complete' />
                        </Link>
                    </form>
                </div>
            </Create>
        )
    }
}

export default TeamForm;