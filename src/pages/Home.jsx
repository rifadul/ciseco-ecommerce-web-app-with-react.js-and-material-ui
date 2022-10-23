import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import BoxContainer from '../components/BoxContainer';
import CardCategory from '../components/home/CardCategory';
import Hero from '../components/home/heroSection/Hero';
import Product from '../components/product/Product';
import TextHeading from '../components/TextHeading';
import workProcessData from '../utils/howItWorkData.json';

const Home = () => {
    return (
        <>
            zzz
         
         
         
         +   {/* here hero section component {rf} */}
            <Hero />

            {/* here hompage main info {rf} */}

            {/* here Discover more section {rf} */}
            <Box
                sx={{
                    margin: '3rem 1rem',
                }}>
                {/* here Category list card {rf}*/}
                <CardCategory />
            </Box>
            <BoxContainer>
                {/* here best sallers section {rf} */}
                <Box
                    sx={{
                        margin: '3rem 0',
                    }}>
                    {/* here section heading text */}
                    <TextHeading
                        highlightText='Best Sellers'
                        normalText='Best selling of the month'
                        textAlign='left'
                    />
                    {/* here All best selles product */}
                    <Product />
                </Box>

                {/* here how it work section {rf} */}
                <Box
                    sx={{
                        margin: '2rem 0',
                        borderTop: '1px solid #e5e7eb',
                        borderBottom: '1px solid #e5e7eb',
                        padding: '5rem 0',
                    }}>
                    {/* here work process container */}
                    <Box>
                        <Grid
                            container
                            spacing={2}>
                            {workProcessData.map((item, key) => {
                                return (
                                    <Grid
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        key={key}>
                                        {/* here work process details container */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '2rem 0',
                                            }}>
                                            {/* here how to work section image container {rf} */}
                                            <Box
                                                sx={{
                                                    marginBottom: '1.5rem',
                                                }}>
                                                {/* here work process image {rf} */}
                                                <img
                                                    src={item.image}
                                                    alt='Filter'
                                                    width={130}
                                                />
                                            </Box>

                                            {/* here work process info container {rf} */}
                                            <Box
                                                sx={{
                                                    textAlign: 'center',
                                                }}>
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent:
                                                            'center',
                                                        marginBottom: '1.5rem',
                                                    }}>
                                                    {/* here work process step number {rf} */}
                                                    <Typography
                                                        sx={{
                                                            backgroundColor:
                                                                'rgb(254 226 226)',
                                                            fontFamily: `'Poppins', sans-serif`,
                                                            color: 'rgb(153 27 27)',
                                                            fontWeight: 500,
                                                            fontSize: '.75rem',
                                                            lineHeight: '1rem',
                                                            padding:
                                                                '0.3rem 0.25rem',
                                                            borderRadius:
                                                                '9999px',
                                                            width: '60px',
                                                        }}>
                                                        Step {item.id}
                                                    </Typography>
                                                </Box>

                                                {/* here work process title {rf} */}
                                                <Typography
                                                    variant='h3'
                                                    sx={{
                                                        fontSize: '1rem',
                                                        fontWeight: 600,
                                                        color: 'rgb(17,24,39)',
                                                        fontFamily: `'Poppins', sans-serif`,
                                                        lineHeight: '1.5rem',
                                                        margin: '1rem 0',
                                                    }}>
                                                    {item.title}
                                                </Typography>

                                                {/* here work process descriptions {rf} */}
                                                <Typography
                                                    variant='span'
                                                    sx={{
                                                        fontSize: '.875rem',
                                                        fontWeight: 400,
                                                        color: 'rgb(100 116 139)',
                                                        fontFamily: `'Poppins', sans-serif`,
                                                        lineHeight: '1.25rem',
                                                        marginTop: '.25rem',
                                                    }}>
                                                    {item.description1} <br />{' '}
                                                    {item.description2}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Box>
            </BoxContainer>
        </>
    );
};

// here export the component
export default Home;
