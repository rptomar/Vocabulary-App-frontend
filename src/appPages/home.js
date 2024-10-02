import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWords, addWord } from '../appActions/searchActions';
import WordList from '../components/searchList';
import { Button, TextField, Container, Typography } from '@mui/material';

const HomePage = () => {
  const [newWord, setNewWord] = useState('');
  const dispatch = useDispatch();
  const wordList = useSelector((state) => state.wordList);
  const { words, error } = wordList;

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  const handleAddWord = () => {
    if (newWord.trim()) {
      dispatch(addWord(newWord));
      setNewWord('');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Vocabulary App</Typography>
      <TextField
        label="Add New Word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        variant="outlined"
        fullWidth
      />
      <Button onClick={handleAddWord} variant="contained" color="primary">
        Add Word
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      <WordList words={words} />
    </Container>
  );
};

export default HomePage;
