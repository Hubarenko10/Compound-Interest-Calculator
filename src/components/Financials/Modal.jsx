import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 450,
  bgcolor: 'background.paper',
  border: '1px solid #f5f5dc',
  borderRadius:'10px',
  boxShadow: 24,
  p: 4,
};

export const TransitionsModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
      >
       <InfoOutlinedIcon/>
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography 
            sx={{
                backgroundcolor: 'primary',
                backgroundImage: `linear-gradient(45deg, #020024, #04b4d7)`,
                backgroundSize: '100%',
                backgroundRepeat: 'repeat',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            align="center" id="transition-modal-title" variant="h6" component="h2">
              How to use Compound Calculator
            </Typography>
            <hr style={{ width: '50%' }}/>
            <Typography mb={1}>
            The concept of compound interest is that interest is added back to the principal sum so that further interest is gained on that already-accumulated interest during the next compounding period. How important is compound interest? Just ask Warren Buffett, one of the world's most successful investors:
            <br /><b>“My wealth has come from a combination of living in America, some lucky genes, and compound interest.”</b>
            </Typography>
            <Typography 
            mb={0.5}
            id="transition-modal-description" >
            Compound interest, or 'interest on interest', is calculated using the compound interest formula.
            </Typography>
            <Typography>
            The formula for compound interest is A = P(1 + r/n)^nt where: 
            <br/>
            <b>P</b> - principal balance
            <br/>
            <b>r</b> - interest rate
            <br/>
            <b>n</b> - the number of times interest is compounded per year(month)
            <br/>
            <b>t</b> - is number of years(month)
            </Typography>
            <Button
              sx={{ 
            position: 'absolute', 
            top: '0%', 
            left: '93%' ,
            '&:hover':{
                backgroundColor: 'transparent',
              },
        }}
              onClick={handleClose}
            >
              <CloseIcon/>
            </Button>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
