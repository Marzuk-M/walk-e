import {
  Card,
  Box,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  Typography,
  ListItemIcon,
} from "@mui/material";
import React from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const dto = {
  title: "Find 3 species of bird!",
  body: "Try to find and capture photos of 3 distinct...",
};
const name = "Marzook";
let completionsToday = 2;

export default function Home() {
  const listItem = (data) => {
    return (
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar>
              <AlternateEmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={data.title} secondary={data.body} />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <Typography variant="h5" sx={{ textAlign: "left" }}>
          Hello, {name}!
        </Typography>
        <Typography variant="p" sx={{ textAlign: "left" }}>
          Challenges Completed Today: {completionsToday}
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center", paddingTop:"1rem" }}>
          Today's Challenges
        </Typography>
      </Box>
      <Card
        variant="elevation"
        sx={{
          width: "100%",
          marginTop: "1em",
          maxHeight: "calc(100% - 15em)",
          overflowY: "auto",
        }}
      >
        <List>{[1, 2, 3, 4, 5].map(() => listItem(dto))}</List>
      </Card>
    </Container>
  );
}
