import { SET_SCUMM_GAMES } from 'actions/scumm';

const scumm = (state = {}, action) => {
  switch (action.type) {
    case SET_SCUMM_GAMES:
      return {
        ...state,
        games: action.payload
      };
    default:
      return state;
  }
};

export default scumm;
