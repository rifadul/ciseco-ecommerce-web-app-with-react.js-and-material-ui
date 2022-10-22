import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
// import { topHeaderBanner, sideBarBanner, profileImage } from '../../ProductRecommendationEngine/src/assets'
// import { heroBgImage } from '../../../assets/assets'
import heroBgImage from '../../../assets/src/home/heroBgImage.svg'


const Hero = () => {
  return (
    <Box sx={{
      // background: `url(${heroBgImage})`,
      background: "rgb(241 245 249)",
      backgroundImage: `url(${heroBgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      height: '400px'
    }}>
      <Typography
        sx={{
          color: 'rgb(51 65 85)',
          display: 'block',
          fontSize: { xs: '10px', md: '15px' },
          fontFamily: `'DM Sans', sans-serif`,
          fontWeight: 500,
          '&:hover': {
            background: "rgb(241 245 249)",
          }
        }}
      >Hero</Typography>


    </Box>
  )
}

// here export the component
export default Hero