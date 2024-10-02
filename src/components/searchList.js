import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, CardActionArea } from '@mui/material';
import WordDetailModal from './wordDetails';

const WordList = ({ words }) => {
  // State to control modal visibility and selected word
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal and setting the selected word
  const handleOpenModal = (word) => {
    setSelectedWord(word);
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedWord(null);
  };

  return (
    <>
      <Grid container spacing={2}>
        {words.map((word) => (
          <Grid item xs={12} sm={6} md={4} key={word._id}>
            {/* Wrap the Card with CardActionArea to make it clickable */}
            <CardActionArea onClick={() => handleOpenModal(word)}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{word.word}</Typography>
                  <Typography variant="body2">Meaning: {word.meaning}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>

      {/* Render the modal when a word is selected */}
      {selectedWord && (
        <WordDetailModal
          open={isModalOpen}
          handleClose={handleCloseModal}
          word={selectedWord}
        />
      )}
    </>
  );
};

export default WordList;
