// src/App.jsx
import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

const App = () => {
  const nomes = ["Alice", "Bob", "Charlie", "Diana"];

  return (
    <div style={{ padding: "2rem" }}>
      <Card>
        <CardContent>
          <Typography variant="h6">Iterando com forEach()</Typography>
          <List>
            {nomes.map((nome, index) => (
              <ListItem key={index}>
                <ListItemText primary={nome} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
