import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import productsData from '../../utils/products.json';

const Product = () => {
    return (
        // here product info container {rf}
        <Grid container spacing={2} sx={{
            // margin: '2rem 0'
        }}>
            {
                // here map all products one by one {rf}
                productsData.map((item, key) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} key={key} sx={{
                            margin: '1rem 0',
                            cursor: 'pointer',
                        }}>
                            <Box>
                                {/* here product image container {rf} */}
                                <Box sx={{
                                    backgroundColor: 'rgb(248 250 252)',
                                    borderRadius: '1.5rem',
                                    position: 'relative'
                                }}>
                                    {/* here favorite icon container */}
                                    <Box sx={{
                                        position: 'absolute',
                                        top: '.75rem',
                                        right: '.75rem',
                                        width: '2.25rem',
                                        height: '2.25rem',
                                        boxShadow: '2px 8px 40px rgba(0,0,0,.08)',
                                        cursor: 'pointer',
                                        backgroundColor: 'rgb(255 255 255)',
                                        borderRadius: '9999px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        {/* here favorite icon */}
                                        <FavoriteIcon sx={{
                                            color: 'rgb(239, 68, 68)'
                                        }} />
                                    </Box>

                                    {/* here product image {rf} */}
                                    <img src={item.image} alt={item.title} width='100%' />
                                </Box>

                                {/* here product info container {rf} */}
                                <Box sx={{
                                    paddingTop: '1.25rem'
                                }}>
                                    {/* here product name {rf} */}
                                    <Typography variant='h2' sx={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        color: 'rgb(17,24,39)',
                                        fontFamily: `'Poppins', sans-serif`,
                                        lineHeight: '1.5rem'
                                    }}>
                                        {item.title}
                                    </Typography>

                                    {/* here product description {rf} */}
                                    <Typography sx={{
                                        fontSize: '.875rem',
                                        fontWeight: 400,
                                        color: 'rgb(100 116 139)',
                                        fontFamily: `'Poppins', sans-serif`,
                                        lineHeight: '1.25rem',
                                        marginTop: '.25rem'
                                    }}>{item.description}</Typography>

                                    {/* here product price and review info container {rf} */}
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        margin: '1rem 0'

                                    }}>

                                        {/* here product price {rf} */}
                                        <Box sx={{
                                            border: '2px solid rgb(34 197 94)',
                                            borderRadius: '.5rem',
                                            fontSize: '.875rem',
                                            fontWeight: 500,
                                            padding: '.375rem .625rem',
                                            color: 'rgb(34 197 94)',
                                            fontFamily: `'Poppins', sans-serif`,
                                        }}>${item.price}</Box>

                                        {/* here  product rating and review {rf} */}
                                        <Box sx={{
                                            fontSize: '.875rem',
                                            fontWeight: 400,
                                            color: 'rgb(100 116 139)',
                                            fontFamily: `'Poppins', sans-serif`,
                                        }}>⭐ {item.rating.rate} ({item.rating.review} review)</Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

// here export the component {rf}
export default Product