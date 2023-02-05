import { Financials } from './Financials/Financials';
import { Title } from './Title/Title';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#FFFDD0';
  });
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '40%',
          height: 'auto',
          backgroundColor: '#f5f5dc',
          m: 'auto',
          borderRadius: '10px',
          border: '1px solid #85854a'
        }}
      >
        <Title />
        <Financials />
        <Toaster />
      </Box>
    </Box>
  );
};
