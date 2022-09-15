import { AppBar , Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu} from '@mui/material'
import { Laptop, Mail, Notifications } from '@mui/icons-material';
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%" 
}));

// const Icons = styled(Box)(({ theme }) => ({
//   backgroundColor: "white",
// }))
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState (false)
  return (
    <AppBar position ="sticky">
        <StyledToolbar> 
            <Typography variant ="h6" sx ={{display: {xs: "none", sm:"block"}}}>
              ALLAN KICHE
            </Typography>
               <Laptop sx={{display: {xs:"block", sm:"none"}}}/>
               <Search>
                <InputBase placeholder = "Search..."/></Search>
               <Icons>
                <Badge badgeContent={4} color="error">
                     <Mail />
                </Badge>
                <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick = {e=>setOpen(true)} />
               </Icons>
        <UserBox onClick = {e=>setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">John</Typography>
        </UserBox>
        </StyledToolbar>
        
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={(e) =>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {/* <MenuItem onClick={handleClose }>Profile</MenuItem >
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
    </AppBar>
  )
}

export default Navbar