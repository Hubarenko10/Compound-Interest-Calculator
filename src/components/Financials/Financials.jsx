import { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import CalculateIcon from '@mui/icons-material/Calculate';
import toast from 'react-hot-toast';
import { CssTextField } from './FinancialsStyled';

export const Financials = () => {
  const [result, setResult] = useState(0);
  const [years, setYears] = useState();
  const [month, setMonth] = useState();
  const [rate, setRate] = useState();
  const [compounds, setCompounds] = useState();
  const [amount, setAmount] = useState();
  const [interest, setInterest] = useState(0);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'amount':
        setAmount(value);

        break;
      case 'years':
        setYears(Number(value));

        break;
      case 'compounds':
        setCompounds(value);

        break;
      case 'rate':
        setRate(value / 100);

        break;
      case 'month':

        setMonth(Number(value / 12));
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    calculate();
  };
  
  const calculate = () => {
    const sumYears = (years + month);
    const result =
      amount * Math.pow(1 + rate / compounds, compounds * sumYears);
    if (!result) {
      return toast.error('You need to fill an empty field', {
        duration: 4000,
        position: 'top-right',
      });
    }
    setResult(result);
    const interest =
      amount * Math.pow(1 + rate / compounds, compounds * sumYears) - amount;
    setInterest(interest);
  };
  return (
    <Box
      sx={{
        mt: '25px',
        width: 700,
        height: 400,
        backgroundColor: '#f5f5dc',
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FormControl
            sx={{
              width: '30%',
              mr: '1rem',
              mb: '15px',
            }}
          >
            <CssTextField
              color="success"
              name="amount"
              onChange={handleChange}
              id="outlined-number"
              label="Amount"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000000000000,
                  min: 0,
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: '30%', mr: '15px', mb: '15px' }}>
            <TextField
              name="compounds"
              onChange={handleChange}
              id="outlined-number"
              label="Compounds"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000000000000,
                  min: 0,
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: '30%', mb: '15px' }}>
            <TextField
              name="rate"
              onChange={handleChange}
              id="outlined-number"
              label="Rate"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000000000000,
                  min: 0,
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: '30%', mb: '40px' }}>
            <TextField
              name="years"
              onChange={handleChange}
              id="outlined-number"
              label="Years"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000000000000,
                  min: 0,
                },
              }}
            />
          </FormControl>
          <FormControl sx={{ width: '30%', ml: '15px', mb: '40px' }}>
            <TextField
              name="month"
              onChange={handleChange}
              id="outlined-number"
              label="Month"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{
                inputProps: {
                  max: 100000000000000,
                  min: 0,
                },
              }}
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="contained" endIcon={<CalculateIcon />}>
            Calculate
          </Button>
        </Box>
      </form>
      <p>Summary: {result.toFixed(2)}</p>
      <p>Earned interest only: {interest.toFixed(2)}</p>
    </Box>
  );
};
