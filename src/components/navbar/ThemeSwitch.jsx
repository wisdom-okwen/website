import * as React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';
import { useContext } from 'react';
import { ThemeContext } from '../../theme_context';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: theme === 'dark' ? 'white' : 'black',
    '&:hover': {
      backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: theme === 'dark' ? 'white' : 'black',
  },
}));

const label = { inputProps: { 'aria-label': 'Dark mode switch' } };

export default function BasicSwitches() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <StyledSwitch {...label} defaultChecked onChange={toggleTheme} theme={theme} />
      <StyledSwitch {...label} onChange={toggleTheme} theme={theme} />
    </div>
  );
}