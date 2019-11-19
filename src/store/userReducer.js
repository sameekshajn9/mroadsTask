import React from 'react';

const defaultState = {
  userName: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ON_LOGIN': {
      console.log(state, action, 'here');
      return (state = {userName: 'name'});
    }
    default:
      return state;
  }
};
export default userReducer;
