import axios from 'axios';

export const fetchWords = () => async (dispatch) => {
  try {
    const { data } = await axios.get('http://localhost:5000/search/word/get'); // API call to fetch words
    dispatch({ type: 'FETCH_WORDS_SUCCESS', payload: data }); // dispatch success action with fetched words
  } catch (error) {
    dispatch({ type: 'FETCH_WORDS_FAIL', payload: error.message }); // dispatch failure action with error message
  }
};

export const addWord = (word) => async (dispatch) => {
  try {
    const { data } = await axios.post('http://localhost:5000/search/word/add', { word }); // API call to add a new word
    dispatch({ type: 'ADD_WORD_SUCCESS', payload: data }); // dispatch success action with added word
  } catch (error) {
    dispatch({ type: 'ADD_WORD_FAIL', payload: error.message }); // dispatch failure action with error message
  }
};
