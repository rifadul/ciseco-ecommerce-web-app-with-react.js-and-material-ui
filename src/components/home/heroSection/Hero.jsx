import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
// import { topHeaderBanner, sideBarBanner, profileImage } from '../../ProductRecommendationEngine/src/assets'
// import { heroBgImage } from '../../../assets/assets'
import heroBgImage from '../../../assets/src/home/heroBgImage.svg'
import heroSectionRightImage from '../../../assets/src/home/heroSectionRightImage.png'
import SearchIcon from '@mui/icons-material/Search';

// const Logo = styled('img')(() => ({
//   // width: '8rem',
//   // minWidth: '4rem'
// }))

const Hero = () => {
  return (
    // here hero section outside container
    <Box sx={{
      background: "#E3FFE6",
      backgroundImage: `url(${heroBgImage})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      height: { xs: '100vh', md: '80vh' },
      display: 'flex',
    }}>
      {/* here hero section inside container */}
      <Box sx={{
        width: { xs: '90%', lg: '80%' },
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        flexDirection: { xs: 'column', md: 'row' }
      }}>

        {/* here content container {rf} */}
        <Box sx={{
          width: '100%',
          flexGrow: 1,
          paddingTop: { xs: '4rem', md: '0' },
        }}>

          {/* here hero section sub title */}
          <Typography sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
            fontFamily: `'DM Sans', sans-serif`,
            fontWeight: 400,
            color: 'rgb(51 65 85)',
          }}>
            In this season, find the best 🔥
          </Typography>

          {/* here hero section main title */}
          <Typography sx={{
            fontSize: { xs: '1.6rem', sm: '2.25rem', md: '3.3rem', lg: '3.4rem' },
            fontFamily: `'DM Sans', sans-serif`,
            fontWeight: 600,
            color: 'black',
            lineHeight: '1.2'
          }}>
            Exclusive collection <br /> for everyone
          </Typography>

          {/* here hero section button {rf} */}
          <Button sx={{
            color: 'rgb(248 250 252)',
            backgroundColor: 'rgb(15 23 42)',
            fontWeight: 500,
            padding: { xs: '.75rem 1rem', sm: '.875rem 1.5rem', lg: '1rem 2rem' },
            borderRadius: '2rem',
            fontSize: { xs: '.875rem', md: '15px' },
            margin: '1.8rem 0',
            '&:hover': {
              backgroundColor: 'rgb(30 41 59)'
            }
          }}>
            Explore now <SearchIcon sx={{
              paddingLeft: '5px'
            }} />
          </Button>

        </Box>

        {/* here image container {rf} */}
        <Box sx={{
          width: '100%',
          flexGrow: { xs: 4, md: 1 },
        }}>
          <img src={heroSectionRightImage} alt="" srcset="" width='100%' />
        </Box>
      </Box>
    </Box >
  )
}

// here export the component
export default Hero