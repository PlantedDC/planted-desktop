import React from 'react';
import {connect} from 'react-redux';
import {getData} from './helperFunctions/fetchRequests';
import { updateUserObject, updatePlantData } from '../actions';
import DataDisplay from './DataDisplay';

class HomeScreenComponent extends React.Component {

  componentDidMount() {
    getData(this.props.token)
    .then((res) => {
      this.props.dispatch(updateUserObject(res.data.currentUser.user));
      this.props.dispatch(updatePlantData(res.data.currentUser.plantData));
    })
  }

  render() {

    let {plantData} = this.props;

    let DisplayDataOnScreen = () => {
      let key = 0;
      if (plantData === null || plantData === undefined) {
        return <div><p>Loading...</p></div>
      } else {
        return <div>{plantData.map(item => <DataDisplay data={item} />)
        }</div>
      }
    };

    return <div >
      <p>Current Readings</p>
      <DisplayDataOnScreen />
      </div>
}
}

let mapStateToProps = (state) => {
  return {token: state.token,
          plantData: state.plantData}
};

let mapDispatchToProps = (dispatch) => {
  return {dispatch: dispatch}
};

let HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

export default HomeScreen;