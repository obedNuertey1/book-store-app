import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => { 
  const [value, setValue] = React.useState(0);
  return (
    <AppBar role="header" sx={{backgroundColor: "#232F3D"}} position="sticky">
      <Toolbar>
        <NavLink to={"/"} style={{color: "unset"}} >
          <Typography component="p">
            <LibraryBooksIcon />
          </Typography>
        </NavLink>
        <Tabs 
        sx={{ml: 'auto'}}
        textColor="inherit" indicatorColor='secondary' value={value} onChange={(_, val)=>{
          setValue(val);
        }}>
          {/* @ts-ignore */}
          <Tab LinkComponent={NavLink} to="/add" label='Add book' />
          {/* @ts-ignore */}
          <Tab LinkComponent={NavLink} to="/books" label='Books' />
          {/* @ts-ignore */}
          <Tab LinkComponent={NavLink} to="/about" label='About Us' />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;