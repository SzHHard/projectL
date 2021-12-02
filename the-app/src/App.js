import React from 'react'
import { Header } from './Components/Header/Header.jsx'
import Options from './Components/Nav/Options.jsx'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import PlayersComponent from './Components/MainContent/Players.jsx'
import TeamsComponent from './Components/MainContent/Teams.jsx'
import DogsComponent from './Components/MainContent/Dogs.jsx'
import Create from './Components/MainContent/Create/Create'
import MainPanel from './Components/MainContent/AboutAndAd.jsx'
import Success from './Components/MainContent/SuccessCreatedPlayerCard'

import './App.css'
import CreatePlayerContainer from './Components/MainContent/Create/PlayerTeamSwitch/CreatePlayerContainer.jsx'
import CreateTeamContainer from './Components/MainContent/Create/PlayerTeamSwitch/CreateTeamContainer.jsx'



class App extends React.Component {

  constructor(props) {
    super(props)
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
                <Route path='players' element={<PlayersComponent Players={this.props.state.Players} />} />
                <Route path='teams' element={<TeamsComponent Teams={this.props.state.Teams} />} />
                <Route path='dogs' element={<DogsComponent />} />
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

export default App;
