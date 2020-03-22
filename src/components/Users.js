import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    debugger
    return (
      <div>
        <ul>
          Users!<br></br>
          {this.props.users.map(user => <li>{user.username} - {user.hometown}</li>)}<br></br>
          Total Users: {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // debugger
  return {
    users: state.users,
    userCount: state.users.length
  }
}

export default connect(mapStateToProps)(Users)
