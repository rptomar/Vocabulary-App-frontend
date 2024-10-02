import axios from 'axios';

export const fetchWords = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:5000/search/word/get');
    dispatch({ type: 'FETCH_WORDS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FETCH_WORDS_FAIL', payload: error.message });
  }
};

export const addWord = (word) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/search/word/add', { word });
    dispatch({ type: 'ADD_WORD_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ADD_WORD_FAIL', payload: error.message });
  }
};
