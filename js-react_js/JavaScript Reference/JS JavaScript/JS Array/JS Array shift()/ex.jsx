import React, { useState } from 'react';
import { Button, Typography, Stack, Box } from "@mui/material";

import './App.css'

function App() {
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Mango', 'Coconut', 'Watermelon']);

  const handleRemoveFirst = () => {
    setFruits((prev) => prev.slice(1));
  }
  
  return (
    <Box>
      <Typography variant='h5' gutterBottom>shift() Example - React + MUI</Typography>
      <Typography variant='subtitle1'>
        Current Array: {fruits.join(', ')}
      </Typography>
      <Stack direction='row' spacing={2} mt={2}>
        <Button
          variant='contained'
          color='primary'
          onClick={handleRemoveFirst}
          disabled={fruits.length === 0}
        >
          Remove First Element
        </Button>
      </Stack>
    </Box>
  )
}

export default App
