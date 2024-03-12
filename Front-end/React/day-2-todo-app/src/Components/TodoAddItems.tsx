import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
const TodoAddItems = () => {
  const[todoItems,settodoItems]=[{
    fruites:"",
    date:""
  }]
  return (
    <Container className="center" sx={{ padding: 4 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Outlined secondary"
              color="error"
              placeholder="add items"
              focused
              fullWidth
            />
          </Grid>
          <Grid item xs>
            <Input type="date" color="error" />
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="success">
              Add items
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TodoAddItems;
