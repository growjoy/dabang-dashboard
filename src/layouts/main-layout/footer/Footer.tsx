import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box textAlign="center" py={3}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()}{' '}
        <Link href="https://www.dabangapp.com" color="inherit" underline="hover">
          Lathif
        </Link>
        . All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
