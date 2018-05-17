import React from 'react';
import TempChartContainerComponent from './TempChartContainerComponent.js';
import HumidityChartContainerComponent from './HumidityChartContainerComponent.js';

import LightChartContainerComponent from './LightChartContainerComponent.js';



let DashboardComponent = () => 
    <div>

        <TempChartContainerComponent />
        <HumidityChartContainerComponent />
        <LightChartContainerComponent />

    </div>

export default DashboardComponent;
