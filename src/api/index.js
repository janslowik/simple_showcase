import axios from 'axios';

export const fetchUser = async username => {
  const responseUser      = await axios.get(`https://api.github.com/users/${username}`);
  const responseFollowers = await axios.get(`https://api.github.com/users/${username}/followers`);

  return {
    ...responseUser.data,
    followers: responseFollowers.data.map(follower => follower.login)
  };
};
