import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { useDispatch, useSelector } from 'react-redux'
import { filterArticle} from '../../redux/article/article.actions';
import { getFilter } from '../../redux/article/article.selectors';

import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

  export default function SearchAppBar() {
    const dispatch = useDispatch();
    const value= useSelector(getFilter);

    const onChange = e => {
    dispatch(filterArticle(e.target.value))
    
    }
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        
      <Toolbar >
      <div>Filter by keywords:</div>
        <Search>
            <SearchIconWrapper >
            <SearchIcon />
            </SearchIconWrapper>
            
            <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={value}
      
            onChange={onChange}
            type="text"
            autoComplete="off"
            autoFocus
          
            />
        </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}