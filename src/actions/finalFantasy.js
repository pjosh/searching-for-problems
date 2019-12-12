export const SET_FF_GAMES = 'SET_FF_GAMES';
export const SET_FF_CHARACTERS = 'SET_FF_CHARACTERS';

export const requestGames = () => dispatch => {
  fetch('https://www.moogleapi.com/api/v1/games')
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({
        type: SET_FF_GAMES,
        payload: response
      });
    });
};

export const requestCharacters = game => dispatch => {
  fetch(`https://www.moogleapi.com/api/v1/characters/search?origin=${game}`)
    .then(response => {
      return response.json();
    })
    .then(response => {
      dispatch({
        type: SET_FF_CHARACTERS,
        payload: { characters: response, game }
      });
    });
};
