import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Switch from './PlayerTeamSwitch/Switch'
import stylesCreate from './Create.module.css'
import PlayerForm from './PlayerTeamSwitch/CreatePlayer'

class Create extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={stylesCreate.createComponent}>
                <div className={stylesCreate.switch}>
                    <Switch name={'PlayerCard'} />
                    <Switch name={'TeamCard'} />
                </div>
                
                {this.props.children}

                {/* <PlayerForm />  */}

            </div>
        )
    }
}

export default Create;