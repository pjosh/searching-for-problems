import { SET_FF_GAMES, SET_FF_CHARACTERS } from 'actions/finalFantasy';

const scumm = (state = {}, action) => {
  switch (action.type) {
    case SET_FF_GAMES:
      return {
        ...state,
        games: action.payload
      };
    case SET_FF_CHARACTERS:
      return {
        ...state,
        characters: {
          ...state.characters,
          [action.payload.game]: action.payload.characters
        }
      };
    default:
      return state;
  }
};

export default scumm;
