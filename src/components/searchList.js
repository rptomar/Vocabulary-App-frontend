import React, { useState } from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import WordDetailModal from './wordDetails'; 

const WordList = ({ words }) => {
  // State to control modal visibility and selected word
  const [selectedWord, setSelectedWord] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal and setting the selected word
  const handleOpenModal = (word) => {
    setSelectedWord(word); // Set the selected word to be displayed in the modal
    setIsModalOpen(true);  // Open the modal
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedWord(null); // Reset the selected word
  };

  return (
    <>
      <div container spacing={2}> {/* Grid container to hold the list of words, with spacing between items */}
        {words.map((word) => (
          <div item xs={12} sm={6} md={4} key={word._id} style={{margin:'5px',}}> {/* Grid item for each word, responsible for responsiveness */}
            {/* Wrap the Card with CardActionArea to make it clickable */}
            <CardActionArea onClick={() => handleOpenModal(word)}> 
              <Card style={{backgroundColor:'#720D5D'}}>
                <CardContent>
                  {/* Displaying the word and its meaning inside the card */}
                  <Typography variant="h5" style={{color:'white'}}>{word.word}</Typography>
                  <Typography variant="body2" style={{color:'white'}}>Meaning: {word.meaning}</Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </div>
        ))}
      </div>

      {/* reender the modal when a word is selected */}
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
