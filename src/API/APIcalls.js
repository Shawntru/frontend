import fakeDreams from '../data/fakeDreams';
import user from '../data/fakeUser';

export const fetchUserLogin = async (email) => {
  return user;
  // try {
  //   const response = await fetch(
  //     'https://vivid-project-backend.herokuapp.com/users/authenticate',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //       }),
  //     }
  //   );
  //   return await response.json();
  // } catch (error) {
  //   return console.log(error);
  // }
};

export const fetchUserDreams = async (token) => {
  return fakeDreams;

  // try {
  //   const response = await fetch(
  //     'https://vivid-project-backend.herokuapp.com/users/authenticate',
  //     {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': token,
  //       },
  //       body: '',
  //     }
  //   );
  //   return await response.json();
  // } catch (error) {
  //   return console.log(error);
  // }
};
