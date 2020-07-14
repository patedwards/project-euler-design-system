import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Drawer from './components/Drawer'
import SolutionViewer from './components/SolutionViewer'
import TopAppBar from './components/TopAppBar'
import { Route, Link } from 'react-router-dom';
import { challengeConfigs } from './configs'


const Home = () => (
  <div>
    <h2> Home </h2>
  </div>
);

const Airport = () => (
  <div>
     <ul>
      <li>Jomo Kenyatta</li>
      <li>Tambo</li>
      <li>Murtala Mohammed</li>
    </ul>
  </div>
);

const City = () => (
  <div>
    <ul>
      <li>San Francisco</li>
      <li>Istanbul</li>
      <li>Tokyo</li>
    </ul>
  </div>
);

class ExampleRouting extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/airports">Airports</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>

        <Route path="/" component={Home}/>
        <Route path="/airports" component={Airport}/>
        <Route path="/cities" component={City}/>
        
      </div>
    );
  }
}


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <TopAppBar/>
        <Route path="/home" component={Drawer}/>
        {challengeConfigs.map(
          (config) => <Route 
            path={"/"+config.urlExtension} 
            component={
              () => <SolutionViewer children={"text"}/>
            }
            />
          )
        }
      </Box>
    </Container>
  );
}