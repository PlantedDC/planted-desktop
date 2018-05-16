import React, {Component} from 'react';
import {connect} from 'react-redux';
import {SunlightDisplay} from './DataDisplay';

class SunlightScreenComponent extends Component {

  render() {

    let {plantData} = this.props;

    let DisplayDataOnScreen = () => {
      let key = 0;
      if (plantData === null || plantData === undefined) {
        return <div><p>Loading...</p></div>
      } else {
        return <div>{plantData.map(item => <SunlightDisplay data={item} />)
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

let SunlightScreen = connect(mapStateToProps)(SunlightScreenComponent);

export default SunlightScreen;