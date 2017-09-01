import React from 'react';
import { connect } from 'react-redux';
import { bool, shape, string, array } from 'prop-types';

const UserDetails = ({ user, searchTerm, isLoading }) =>
  <div>
    {searchTerm && (
      <div>
        <h3>User details</h3>
        {user ? (
          <div>
            <h5>login</h5>
            <p>{user.login}</p>
            <h5>name</h5>
            <p>{user.name}</p>
            <h5>avatar</h5>
            <img src={user.avatar_url} alt="avatar" style={{ width: 40, height: 40 }} />
            <h5>followers</h5>
            <ul>
              {user.followers.map((follower, i) => <li key={i}>{follower}</li>)}
            </ul>
          </div>
        ) : (
          <div>
            {isLoading ? '---- searching ----' : '---- not found ----'}
          </div>
        )}
      </div>
    )}
  </div>
;

UserDetails.propTypes = {
  isLoading: bool,
  user: shape({
    login: string,
    name: string,
    avatar: string,
    followers: array
  }),
  searchTerm: string
};

const mapStateToProps = ({ selectedUser, github, searchTerm }) => ({
  isLoading: github.isLoading,
  user: selectedUser,
  searchTerm
});

export default connect(mapStateToProps)(UserDetails);
