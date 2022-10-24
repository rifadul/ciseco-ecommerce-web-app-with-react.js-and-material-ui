import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BoxContainer from '../components/BoxContainer';
import CardCategory from '../components/home/CardCategory';
import Hero from '../components/home/heroSection/Hero';
import Product from '../components/product/Product';
import TextHeading from '../components/TextHeading';
import workProcessData from '../utils/howItWorkData.json';
import { promotionalImage, logo } from '../assets/assets'
import { categoryData } from '../utils/categoryData';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Home = () => {
    return (
        <>
            {/* here hero section component {rf} */}
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

                {/* here promotion section {rf} */}

                <Box sx={{
                    marginTop: '5rem',
                    marginBottom: '5rem',
                }}>
                    <Grid container spacing={2} alignItems='center'>
                        <Grid item xs={12} sm={6} md={5}>
                            {/* here logo image {rf} */}
                            <Box>
                                <img src={logo} alt="Site logo" width={100} />
                            </Box>

                            {/* here promotional text contianer {rf} */}
                            <Box>
                                {/* here promotional text {rf} */}
                                <Typography variant='h2' sx={{
                                    fontSize: { xs: '1.875rem', md: '2.25rem', lg: '3rem' },
                                    fontFamily: `'DM Sans', sans-serif`,
                                    fontWeight: 600,
                                    color: 'rgb(15 23 42)',
                                    lineHeight: '2.5rem',
                                    margin: '2rem 0',
                                }}>Earn free money <br /> with Ciseco</Typography>

                                {/* here promotional sub text {rf} */}
                                <Typography variant='p' sx={{
                                    fontSize: { xs: '0.875rem', sm: '1.2rem', md: '1rem' },
                                    fontFamily: `'DM Sans', sans-serif`,
                                    fontWeight: 400,
                                    color: 'rgb(100 116 139)',
                                    marginTop: '1.5rem',
                                    lineHeight: '1.5rem'
                                }}>With Ciseco you will get freeship & savings combo...</Typography>
                            </Box>

                            {/* here promotional button container {rf} */}

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                margin: '3rem 0'
                            }}>
                                {/* here left button {rf} */}
                                <Button sx={{
                                    padding: '.875rem 1.5rem',
                                    color: 'rgb(248 250 252)',
                                    fontWeight: 500,
                                    fontSize: '.875rem',
                                    lineHeight: '1.25rem',
                                    backgroundColor: 'rgb(15 23 42)',
                                    boxShadow:
                                        '2px 8px 40px rgb(0 0 0 / 8%)',
                                    borderRadius: '9999px',
                                    '&:hover': {
                                        backgroundColor: 'rgb(30 41 59)',
                                    },
                                }}>Saving combo</Button>

                                {/* here right button {rf} */}
                                <Button sx={{
                                    padding: { xs: '.75rem 1rem', md: '.875rem 1.5rem' },
                                    color: 'rgb(51 65 85)',
                                    fontWeight: 500,
                                    fontSize: '.875rem',
                                    lineHeight: '1.25rem',
                                    backgroundColor: 'rgb(255 255 255)',
                                    boxShadow:
                                        '2px 8px 40px rgb(0 0 0 / 8%)',
                                    borderRadius: '9999px',
                                    border: '1px solid rgb(241 245 249)',
                                    '&:hover': {
                                        backgroundColor: 'rgb(243 244 246)',
                                    },
                                }}>Saving Discover</Button>
                            </Box>
                        </Grid>

                        {/* here promotional brand image container {rf} */}
                        <Grid item xs={12} sm={6} md={7}>
                            <Box sx={{
                                padding: '1rem'
                            }}>
                                {/* here promotional brand image {rf} */}
                                <img src={promotionalImage} alt="" width="100%" />
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </BoxContainer>

            {/* here exploring product category section {rf} */}

            <Box sx={{
                width: '90%',
                margin: '0 auto',
                backgroundColor: 'rgb(243,244,246)',
                borderRadius: '40px'
            }}>
                <Box sx={{
                    padding: '7rem 0',
                    width: '90%',
                    margin: '0 auto'
                }}>

                    {/* here section heading text {rf} */}
                    <Typography sx={{
                        fontSize: { xs: '1.875rem', md: '2.25rem' },
                        textAlign: 'center',
                        fontFamily: `'Poppins', sans-serif`,
                        fontWeight: 600,
                        color: 'rgb(15 23 42)',
                        lineHeight: '2.5rem',
                        margin: '2rem 0 3rem',
                    }}>
                        Start exploring.
                    </Typography>

                    <Box>

                        {/* here category list container {rf} */}
                        <Box sx={{
                            display: 'flex',
                            backgroundColor: 'rgb(255 255 255)',
                            padding: '1.1rem',
                            borderRadius: '9999px',
                            margin: '2rem auto 3rem auto',
                            justifyContent: 'space-evenly',
                            width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
                        }}>
                            <Typography>Women</Typography>
                            <Typography>Man</Typography>
                            <Typography>Kids</Typography>
                            <Typography>Sports</Typography>
                            <Typography>Beauty</Typography>
                            <Typography>Jewelry</Typography>
                        </Box>

                        {/* here product category details card container {rf} */}
                        <Box>
                            <Grid container spacing={2}>
                                {
                                    // here category data map individually {rf}
                                    categoryData.map((item, key) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} key={key}>
                                                <Box sx={{
                                                    backgroundColor: 'rgb(255 255 255)',
                                                    borderRadius: '1.5rem',
                                                    padding: '2rem',
                                                    position: 'relative',
                                                    cursor: 'pointer',
                                                    "&:hover": {
                                                        boxShadow: '2px 8px 40px rgba(0,0,0,.08)'
                                                    }
                                                }}>
                                                    {/* here category image and product number contianer {rf} */}
                                                    <Box sx={{
                                                        display: 'flex',
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center'
                                                    }}>

                                                        {/* here product category image {rf} */}
                                                        <Box sx={{
                                                            backgroundColor: 'rgb(238 242 255)',
                                                            borderRadius: '50%',
                                                            width: '80px',
                                                            height: '80px',
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={item.image} alt={item.title} width={80} />
                                                        </Box>

                                                        {/* here total product present in category {rf} */}
                                                        <Box>
                                                            <Typography sx={{
                                                                fontSize: '.75rem',
                                                                lineHeight: "1rem",
                                                                fontWeight: 500,
                                                                color: 'rgb(51 65 85)',
                                                                fontFamily: `'Poppins', sans-serif`,
                                                            }}>{item.products} products</Typography>
                                                        </Box>
                                                    </Box>

                                                    {/* here product category name and category type container {rf} */}
                                                    <Box sx={{
                                                        margin: '3rem 0'
                                                    }}>
                                                        {/* here product category type name {rf} */}
                                                        <Typography sx={{
                                                            fontSize: '.875rem',
                                                            lineHeight: "1.25rem",
                                                            fontWeight: 500,
                                                            color: 'rgb(100 116 139)',
                                                            fontFamily: `'Poppins', sans-serif`,
                                                            marginBottom: '0.5rem'
                                                        }}>{item.type}</Typography>

                                                        {/* here product category name {rf} */}
                                                        <Typography variant='h2' sx={{
                                                            fontSize: '1.875rem',
                                                            lineHeight: "2.25rem",
                                                            fontWeight: 600,
                                                            color: 'rgb(15 23 42)',
                                                            fontFamily: `'Poppins', sans-serif`,
                                                        }}>{item.title}</Typography>
                                                    </Box>

                                                    {/* here navigation text container {rf} */}
                                                    <Box sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        color: 'rgb(100 116 139)',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: '#07a4f1'
                                                        }
                                                    }}>
                                                        {/* here navigation text {rf} */}
                                                        <Typography sx={{
                                                            fontSize: '.875rem',
                                                            lineHeight: "1.25rem",
                                                            fontWeight: 500,
                                                            fontFamily: `'Poppins', sans-serif`,
                                                        }}>
                                                            See Collection
                                                        </Typography>

                                                        {/* here navigation arraw icon {rf} */}
                                                        <ArrowRightAltIcon sx={{
                                                            marginLeft: '0.3rem'
                                                        }} />
                                                    </Box>

                                                    {/* here categroy card container background image container {rf}  */}
                                                    <Box sx={{
                                                        position: 'absolute',
                                                        right: 0,
                                                        bottom: 0
                                                    }}>
                                                        <img src={item.bgImage} alt="" width={250} />
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    );
};

// here export the component
export default Home;
