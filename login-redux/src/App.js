import React, { useState } from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Login from './pages/Login/Login';
import User from './pages/User/User';

function App() {
  const [value, setValue] = useState('1');

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="FORM" value="1" />
            <Tab label="USER" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1"><Login /></TabPanel>
        <TabPanel value="2"><User /></TabPanel>
      </TabContext>
    </div>
  );
}

export default App;
