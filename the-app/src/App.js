import React from 'react'
import { Header } from './Components/Header/Header.jsx'
import Options from './Components/Nav/Options.jsx'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import PlayersContainer from './Components/MainContent/Players/PlayersContainer'
import TeamsComponent from './Components/MainContent/Teams.jsx'
import DogsComponent from './Components/MainContent/Dogs.jsx'
import Create from './Components/MainContent/Create/Create'
import MainPanel from './Components/MainContent/AboutAndAd.jsx'
import Success from './Components/MainContent/SuccessCreatedPlayerCard'
import RegistrationForm from './Components/MainContent/RegistrationForm'
import LoginFormContainer from './Components/MainContent/LoginForm.jsx'
import store from './State/reduxStore';
import './App.css'
import CreatePlayerContainer from './Components/MainContent/Create/PlayerTeamSwitch/CreatePlayerContainer.jsx'
import CreateTeamContainer from './Components/MainContent/Create/PlayerTeamSwitch/CreateTeamContainer.jsx'
import AllUsers from './Components/MainContent/Users/AllUsers.jsx'
import { connect } from 'react-redux'
import {checkAuthTC} from './State/CurrentUserReducer';


class App extends React.Component {


componentDidMount() {
  this.props.checkAuthTC() // думаю, это надо переработать

}

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Options />


          <main>
            <Routes>
              <Route path='/' >
                <Route index path='home' element ={<MainPanel />} />
                <Route path='registration' element={<RegistrationForm />} />
                <Route path='login' element={<LoginFormContainer />} />
                <Route path='players' element={<PlayersContainer  />} />
                <Route path='teams' element={<TeamsComponent Teams={this.props.state.Teams} />} />
                <Route path='dogs' element={<DogsComponent />} />
                <Route path='users' element={<AllUsers />} />
                <Route path='create' element={<Create />} />
                <Route path='create/:prefferedCard' element={<Create />} />
                <Route path='/create/PlayerCard' element={<CreatePlayerContainer />} />
                <Route path='/create/TeamCard' element={<CreateTeamContainer />} />
                <Route path='success' element={<Success />} />
              </Route>
            </Routes>
            
            <Outlet /> 
          </main>

        </div>

      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  
  }
}




export default connect(mapStateToProps, {checkAuthTC})(App);
