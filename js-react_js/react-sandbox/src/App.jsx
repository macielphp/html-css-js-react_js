import React, {useEffect, useState } from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Divider } from "@mui/material";

import './App.css'

function App() {
  const [nomesComEstado, setNomesComEstado] = useState([]);

  const nomes = ['alice', 'Bob', 'Charlie','Diana'];

  // 1. forEach(efeito colateral - apenas console.log)
  useEffect(() => {
    console.log('Usando forEach:')
    nomes.forEach((nome) => {
      console.log(nome);
    });

    // 2. Armazenar os nomes no estado (simulando fetch por exemplo)
    setNomesComEstado(nomes);
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      {/* 1. map direto */}
      <Card>
        <CardContent>
          <Typography variant='h6'>Iterando com map()</Typography>
          <List>
            {nomes.map((nome, index) => (
              <ListItem key={index}>
                <ListItemText primary={nome} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      
      <Divider />

      {/* 2. map com estado */}
      <Card sx={{ marginTop: 2 }}>
        <CardContent>
          <Typography variant='h6'>Iterando com map() a partir do estado(useState)</Typography>
          <List>
            {nomesComEstado.map((nome, index) => (
              <ListItem key={index}>
                <ListItemText primary={nome} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
