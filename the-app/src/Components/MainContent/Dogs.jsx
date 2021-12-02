import React from 'react'
import stylesDogs from './Dogs.module.css'
import dog1 from '../../images/dog1.jpg'
import dog2 from '../../images/dog2.jpg'
import dog3 from '../../images/dog3.jpg'

class DogsComponent extends React.Component {

    render() {

        return (
            <div className = {stylesDogs.dogsComponent}> 
                <img className = {stylesDogs.dogInstance} src = {dog1} />
                <img className = {stylesDogs.dogInstance} src = {dog2} />
                <img className = {stylesDogs.dogInstance} src = {dog3} />
            </div>
        )
    }
}

export default DogsComponent;