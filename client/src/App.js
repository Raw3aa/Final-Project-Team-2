import React from 'react';
import { Container} from '@material-ui/core';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
// import VideoBackground from './components/background/Background';
// import vid from "https://www.youtube.com/watch?v=vV-881DGqrc"
import vid from "./intro.mp4"
import "./styles.css"


import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      {/* <VideoBackground video={'https://www.youtube.com/embed/eIJJxbs5o9U&autoplay=1&mute=1&controls=0&fs=1'} /> */}

      <Container maxWidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
