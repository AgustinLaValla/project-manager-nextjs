import React from 'react'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useUIContext } from '@/providers/UI';

const items = [
  { text: 'Inbox', Icon: InboxIcon },
  { text: 'Starred', Icon: MailIcon }
]

export const Sidebar = () => {
  const { sidemenuOpen, closeSideMenu } = useUIContext();

  const handleClick = () => closeSideMenu();

  return (
    <Drawer anchor='left' open={sidemenuOpen} onClose={closeSideMenu}>
      <Box width={250} onClick={handleClick}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {
            items.map(({ text, Icon }, i) => (
              <ListItem key={`list-item-${i}`}>
                <ListItemButton>
                  <ListItemIcon><Icon /></ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            items.map(({ text, Icon }, i) => (
              <ListItem key={`list-item-${i}`}>
                <ListItemButton>
                  <ListItemIcon><Icon /></ListItemIcon>
                  <ListItemText>{text}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>

      </Box>

    </Drawer>
  )
}
