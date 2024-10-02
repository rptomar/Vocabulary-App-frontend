const initialState = { words: [], loading: false, error: null }; // Initial state for the word list, loading status, and error

export const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORDS_SUCCESS':
      return { ...state, words: action.payload, loading: false }; // On success, update the words list and set loading to false

    case 'ADD_WORD_SUCCESS':
      return { ...state, words: [...state.words, action.payload], loading: false }; // On word addition success, append new word to the state

    case 'FETCH_WORDS_FAIL':
    case 'ADD_WORD_FAIL':
      return { ...state, error: action.payload, loading: false }; // On failure, store the error and stop loading

    default:
      return state; // Return the current state for any unhandled actions
  }
};
