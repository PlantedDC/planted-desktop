import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HumidityDisplay} from './DataDisplay';

class HumidityScreenComponent extends Component {

  render() {

    let {plantData} = this.props;

    let DisplayDataOnScreen = () => {
      //let key = 0;
      if (plantData === null || plantData === undefined) {
        return <div><p>Loading...</p></div>
      } else {
        return <div>{plantData.map(item => <HumidityDisplay data={item} />)
        }</div>
      }
    };

    return <div>
      <p >Current Readings</p>
      <DisplayDataOnScreen />
      </div>
  }
}

let mapStateToProps = (state) => {
  return {token: state.token,
          plantData: state.plantData}
};

let HumidityScreen = connect(mapStateToProps)(HumidityScreenComponent);

export default HumidityScreen;
