import React from 'react';

let ProfileScreen = (props) => {
    return <div>
        <p>Profile</p>
        <button
          title="Go to Home"
          onPress={() => this.props.history.push('/home')}
        />
      </div>
}


export default ProfileScreen;