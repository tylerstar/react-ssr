import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        Here's a big list of users:
        <ul>
          {this.props.users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => ({
  users: state.users
});
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UsersList);