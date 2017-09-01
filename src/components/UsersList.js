import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { connect } from 'react-redux';

const UsersList = ({ users }) =>
  <div>
    <h3>Users in store: { users.length}</h3>
    {users.map((user, i) =>
      <div key={i}>
        {`${i + 1}.  ${user.login}`}
      </div>
    )}
  </div>;

UsersList.propTypes = {
  users: arrayOf(shape({
    login: string.isRequired
  })).isRequired
};


const mapStateToProps = ({ github: { users } }) => ({
  users: Object.keys(users).map(user => users[user])
});

export default connect(mapStateToProps)(UsersList);
