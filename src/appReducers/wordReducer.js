const initialState = { words: [], loading: false, error: null };

export const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WORDS_SUCCESS':
      return { ...state, words: action.payload, loading: false };
    case 'ADD_WORD_SUCCESS':
      return { ...state, words: [...state.words, action.payload], loading: false };
    case 'FETCH_WORDS_FAIL':
    case 'ADD_WORD_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
