import React, { useEffect, useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux'; 
import { fetchWords, addWord } from '../appActions/searchActions'; 
import WordList from '../components/searchList'; 
import { Button, TextField, Container, Typography } from '@mui/material'; 

const HomePage = () => {
  const [newWord, setNewWord] = useState(''); // State for holding the value of new word input


  const dispatch = useDispatch(); // useDispatch to dispatch actions (like adding or fetching words)
  
  // useSelector hook gets the wordList state from redux
  const wordList = useSelector((state) => state.wordList);


  const { words, error } = wordList; // destructuring words and error from the wordList state
  
  // useEffect will run once on component mount to fetch the words from backend
  useEffect(() => {
    dispatch(fetchWords()); // ddispatching fetchWords action to get the list of words from backend

  }, [dispatch]); // ependency array includes dispatch to avoid running it multiple times
  
  // this function gets called when the 'Add Word' button is clicked
  const handleAddWord = () => {
    if (newWord.trim()) {


      dispatch(addWord(newWord)); // dispatch action to add a new word to the list

      setNewWord(''); // reesetting the input field after adding the word
    }
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '600px' }}> 

      <Typography variant="h4" style={{ marginBottom: '20px' }}> 

        Vocabulary App {/* App title, which is displayed at the top */}
      </Typography>

      {/* input field for adding a new word, fullWidth makes it span across the container */}
      <TextField
        label="Add New Word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)} // onChange updates the state with the input value
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }} 
      />

      {/* Button to trigger the addWord action */}


      <Button 
        onClick={handleAddWord} 
        variant="contained" 
        color="primary" 
        style={{ marginBottom: '20px' }}
      >
        Add Word
      </Button>

      {/* display an error message if there's an error */}
      {error && <Typography color="error" style={{ marginBottom: '20px' }}>
        <p>Error: the free version of oxford api limited to the first letter of the alphabets, Kindly search word start with "A"</p>
        <p>Or</p>
        {error}
      </Typography>}

      {/* render the list of words */}
      <WordList words={words} /> {/* the list of words is passed as props to the WordList component */}
    </Container>
  );
};

export default HomePage;
