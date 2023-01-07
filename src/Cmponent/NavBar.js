import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Badge, Stack } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
 import { useSelector } from 'react-redux';

export default function NavBar() {

    // get data of cartSlice 
    // it automatically update when add change
    // state is whole state so we specify which store we need to use here
    const cardData=useSelector((state)=>state.cart)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container>

                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                            sx={{ mr: 2 ,mt:1, display: { xs: "block", sm:"none"}}}
                        >
                        <MenuIcon 

                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick} />
                    </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Home</MenuItem>
                            <MenuItem onClick={handleClose}>Product</MenuItem>
                            <MenuItem onClick={handleClose}>Cart</MenuItem>
                            <MenuItem onClick={handleClose}>Login</MenuItem>
                        </Menu>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E-comm
                    </Typography>
                        <Stack direction="row"  sx={{display:{xs:"none",sm:"inline"}}}>
                   <NavLink className="navbar_items" to="/">
                     <Button color="inherit">Home</Button>
                    </NavLink>
                            <NavLink className="navbar_items" to="/products">

                    <Button color="inherit">Product</Button>
                    </NavLink>
                            <NavLink className="navbar_items" to="/cart">
                                <Button color="inherit"><Badge badgeContent={cardData.length} color="error">
                                <AddShoppingCartIcon />
                            </Badge></Button>
                    </NavLink>
                            <NavLink className="navbar_items" to="/account">
                                <IconButton sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCB6tr129ADV_XCciVrfNn1NAkfo0nCZNGE4aG3tf&s" />
                                </IconButton>
                        </NavLink>

                            

                </Stack>
                </Toolbar>
                        </Container>
            </AppBar>
        </Box>
    );
}