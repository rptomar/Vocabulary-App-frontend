import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const WordDetailModal = ({ open, handleClose, word }) => {
  return (
    <Modal open={open} onClose={handleClose}>{/**Use model for open popup of component */}
      <Box sx={{ padding: 2, backgroundColor: 'white', margin: 'auto', width: 400, marginTop: '20vh' }}>
        <Typography variant="h4">{word.word}</Typography>{/**Use Typography for display text in component */}
        <Typography ><strong>Meaning:</strong> {word.meaning}</Typography>
        {word.example && <Typography ><strong >Example:</strong> {word.example}</Typography>}
      </Box>
    </Modal>
  );
};

export default WordDetailModal;
