import React from 'react'
import stylesDogs from './Dogs.module.css'
import dog1 from '../../images/dog1.jpg'
import dog2 from '../../images/dog2.jpg'
import dog3 from '../../images/dog3.jpg'

class DogsComponent extends React.Component {

    render() {

        return (
            <div className = {stylesDogs.dogsComponent}> 
                <img alt={'dog1'} className = {stylesDogs.dogInstance} src = {dog1} />
                <img alt={'dog2'} className = {stylesDogs.dogInstance} src = {dog2} />
                <img alt={'dog3'} className = {stylesDogs.dogInstance} src = {dog3} />
            </div>
        )
    }
}

export default DogsComponent;