import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const WordDetailModal = ({ open, handleClose, word }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={{ padding: 2, backgroundColor: 'white', margin: 'auto', width: 400, marginTop: '20vh' }}>
        <Typography variant="h5">{word.word}</Typography>
        <Typography>Meaning: {word.meaning}</Typography>
        {word.example && <Typography>Example: {word.example}</Typography>}
      </Box>
    </Modal>
  );
};

export default WordDetailModal;
