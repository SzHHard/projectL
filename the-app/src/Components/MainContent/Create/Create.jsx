import React from 'react'
import Switch from './PlayerTeamSwitch/Switch'
import stylesCreate from './Create.module.css'

class Create extends React.Component {

    render() {

        return (
            <div className={stylesCreate.createComponent}>
                <div className={stylesCreate.switch}>
                    <Switch name={'PlayerCard'} />
                    <Switch name={'TeamCard'} />
                </div>
                
                {this.props.children}


            </div>
        )
    }
}

export default Create;