import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";

export default function FolderList() {
  return (
    <List sx={{ maxWidth: 900, margin: 2, px: 8, bgcolor: 'background.paper', my: 2 }} >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Mesa de centro" secondary="R$ 896,63" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Cadeira de praia" secondary="R$ 452,90" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Abajour" secondary="R$ 98,63" />
      </ListItem>
    </List>
  );
}