import React, { useState } from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  IconButton,
} from "@mui/material";

export const FavoriteDrawer = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => () => {
    setDrawer(open);
  };

  const list = () => (
    <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={toggleDrawer(true)}
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={5} color="error">
          <FavoriteTwoToneIcon />
        </Badge>
      </IconButton>
      <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
};
