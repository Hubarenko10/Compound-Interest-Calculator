import Typography from '@mui/material/Typography';
export const Title = () => {
  return (
    <>
      <Typography
        mt={5}
        variant="h4"
        align="center"
        color="grey.700"
        sx={{
          backgroundcolor: 'primary',
          backgroundImage: `linear-gradient(45deg, #003366, #ffcc66)`,
          backgroundSize: '100%',
          backgroundRepeat: 'repeat',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        Annual Compound Interest Calculator
      </Typography>

      <hr style={{ width: '50%' }} />
    </>
  );
};
