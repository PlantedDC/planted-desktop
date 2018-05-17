import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import HomeScreen from './Components/HomeScreen';
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';
import MoistureScreen from './Components/MoistureScreen';
import HumidityScreen from './Components/HumidityScreen';
import TemperatureScreen from './Components/TemperatureScreen';
import SunlightScreen from './Components/SunlightScreen';
import ProfileScreen from './Components/ProfileScreen';
import TempChartContainerComponent from './Components/TempChartContainerComponent';


let Router = () => 
  <div>
    <HashRouter>
            <div>
            <Route path="/" exact component={LandingPage} />
            <Route path="/home" component={HomeScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/moisture" component={MoistureScreen} />
            <Route path="/temperature" component={TemperatureScreen} />
            <Route path="/humidity" component={HumidityScreen} />
            <Route path="/sunlight" component={SunlightScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/chart" component={TempChartContainerComponent} />
            </div>
    </HashRouter>
  </div>

export default Router;