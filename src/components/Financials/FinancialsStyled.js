import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#003366',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#003366',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'gray',
    },
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#003366',
    },
  },
});