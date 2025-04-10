// src/App.jsx
import React, { useEffect } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function App() {
  useEffect(() => {
    const secretData = new WeakMap();

    let obj = { id: 1 };
    secretData.set(obj, 'Informação privada');

    console.log('Antes de remover referência:', secretData.get(obj));

    // Simula remoção da referência
    obj = null;

    // Depois disso, o garbage collector pode limpar a entrada no WeakMap
    console.log('Referência removida: dados podem ser limpos da memória automaticamente');
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h6">WeakMap em React</Typography>
          <Typography variant="body2">
            Veja o console para entender como o WeakMap lida com objetos temporários de forma eficiente.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
