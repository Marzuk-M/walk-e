import { 
  Card, Grid, Box, Container, List, 
  ListItem, ListItemAvatar, ListItemText, 
  Divider, Avatar, Typography, ListItemIcon
} from "@mui/material";
import React from "react";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const dto = {
  title: "Brunch this weekend?",
  body: "I'll be in your neighborhood doing errands this…",
}
const name = "John"

export default function Home() {
  const listItem = (data) => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar><AlternateEmailIcon/></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={data.title}
            secondary={data.body}
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Card variant="elevation" sx={{ width: '100%', height: '7em', marginTop: '1em' }}>
        <Typography variant="h3" sx={{ p: 3 }}>
          Hello, {name}!
        </Typography>
      </Card>
      <Card variant="elevation" sx={{ width: '100%', marginTop: '1em', maxHeight: "calc(100% - 15em)", overflowY: 'auto' }}>
        <List>
          {[1,2,3,4,5,6,7].map(() => listItem(dto))}
        </List>
      </Card>
    </Container>
  );
}
