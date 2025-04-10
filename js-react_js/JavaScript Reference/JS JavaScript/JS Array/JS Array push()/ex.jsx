import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  Paper,
} from '@mui/material';

export default function App(){
  const [items, setItems] = useState(['Apple', 'Banana']);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if(newItem.trim() !== "") {
      setItems((prev) => [...prev, newItem]);
      setNewItem('');
    }
  };

  return(
    <Box p={4}>
      <Typography variant='h5' gutterBottom>push() example - React + MUI</Typography>
      <Typography variant='subtitle1' gutterBottom>Current Array: {items.join(', ')}</Typography>
      <Stack direction='row' spacing={2} alignItems='center' mb={2}>
        <TextField 
          label='New Item'
          variant='outlined'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button variant='contained' onClick={handleAddItem}>
          Add to array
        </Button>
        <Paper elevation={13} sx={{ p: 2 }}>
          <Typography variant='body1'>Array Length: {items.length}</Typography>
        </Paper>
      </Stack>
    </Box>
  )
}