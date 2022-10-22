import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material';
import TextHeading from '../TextHeading';
import categoryImg1 from '../../assets/src/home/categoryImg1.png'
import categoryImg2 from '../../assets/src/home/categoryImg2.png'
import categoryImg3 from '../../assets/src/home/categoryImg3.png'


const CardCategory = () => {
    return (
        <>
            {/* here section heading text */}
            <TextHeading highlightText="Discover more" normalText='Good things are waiting for you' textAlign='center' />
            <Grid container spacing={2} sx={{
                // margin: '2rem 0'
            }}>
                {/* here category one {rf} */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{
                        backgroundColor: 'rgb(254 252 232)',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        position: 'relative',
                        height: '300px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            height: '300px'
                        }}>
                            <img src={categoryImg1} alt="Explore new arrivals" width={150} />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: '1.5rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-start'
                        }}>
                            <Typography sx={{
                                fontSize: '1rem',
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 400,
                                color: 'rgb(51 65 85)',
                                lineHeight: '1.25rem'
                            }}>Explore new arrivals</Typography>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem' },
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 600,
                                color: 'rgb(15 23 42)',
                                lineHeight: '2rem'
                            }} >Shop the latest <br /> from top brands</Typography>
                            <Button sx={{
                                padding: '.875rem 1.5rem',
                                color: 'rgb(51 65 85)',
                                fontWeight: 500,
                                fontSize: '.875rem',
                                lineHeight: '1.25rem',
                                backgroundColor: 'rgb(255 255 255)',
                                boxShadow: '2px 8px 40px rgb(0 0 0 / 8%)',
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: 'rgb(243 244 246)'
                                }
                            }}>
                                Show me all
                            </Button>
                        </Box>

                    </Box>
                </Grid>

                {/* here category two {rf} */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{
                        backgroundColor: '#FDF2F2',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        position: 'relative',
                        height: '300px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            height: '300px'
                        }}>
                            <img src={categoryImg2} alt="Explore new arrivals" width={150} />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: '1.5rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-start'
                        }}>
                            <Typography sx={{
                                fontSize: { xs: '.875rem', sm: '.875rem', md: '.875rem' },
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 400,
                                color: 'rgb(51 65 85)',
                                lineHeight: '1.25rem'
                            }}>Explore new arrivals</Typography>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem' },
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 600,
                                color: 'rgb(15 23 42)',
                                lineHeight: '2rem'
                            }} >Shop the latest <br /> from top brands</Typography>
                            <Button sx={{
                                padding: '.875rem 1.5rem',
                                color: 'rgb(51 65 85)',
                                fontWeight: 500,
                                fontSize: '.875rem',
                                lineHeight: '1.25rem',
                                backgroundColor: 'rgb(255 255 255)',
                                boxShadow: '2px 8px 40px rgb(0 0 0 / 8%)',
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: 'rgb(243 244 246)'
                                }
                            }}>
                                Show me all
                            </Button>
                        </Box>

                    </Box>
                </Grid>

                {/* here category three {rf} */}
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{
                        backgroundColor: '#EFF6FF',
                        borderRadius: '1rem',
                        padding: '1.5rem',
                        position: 'relative',
                        height: '300px'
                    }}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            height: '300px'
                        }}>
                            <img src={categoryImg3} alt="Explore new arrivals" width={150} />
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            left: '1.5rem',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-evenly',
                            alignItems: 'flex-start'
                        }}>
                            <Typography sx={{
                                fontSize: { xs: '.875rem', sm: '.875rem', md: '.875rem' },
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 400,
                                color: 'rgb(51 65 85)',
                                lineHeight: '1.25rem'
                            }}>Explore new arrivals</Typography>
                            <Typography variant='h2' sx={{
                                fontSize: { xs: '1.5rem', sm: '1.5rem', md: '1.5rem' },
                                fontFamily: `'DM Sans', sans-serif`,
                                fontWeight: 600,
                                color: 'rgb(15 23 42)',
                                lineHeight: '2rem'
                            }} >Shop the latest <br /> from top brands</Typography>
                            <Button sx={{
                                padding: '.875rem 1.5rem',
                                color: 'rgb(51 65 85)',
                                fontWeight: 500,
                                fontSize: '.875rem',
                                lineHeight: '1.25rem',
                                backgroundColor: 'rgb(255 255 255)',
                                boxShadow: '2px 8px 40px rgb(0 0 0 / 8%)',
                                borderRadius: '9999px',
                                '&:hover': {
                                    backgroundColor: 'rgb(243 244 246)'
                                }
                            }}>
                                Show me all
                            </Button>
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </>
    )
}

export default CardCategory