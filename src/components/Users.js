import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  renderUsers = () => {
    return this.props.users.map( user => <ul >
      {user.username}
    </ul>)
  }

    render() {
    console.log(this.props)
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);
    return (
      <div>
        {this.props.userCount}
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {users}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return{
    users: state.users,
    userCount: state.users.length,
  }
}
// connect this component to Redux
export default connect(mapStateToProps)(Users)
