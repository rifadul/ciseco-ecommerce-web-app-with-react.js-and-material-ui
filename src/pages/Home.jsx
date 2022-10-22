import React from 'react'
import BoxContainer from '../components/BoxContainer'
import Hero from '../components/home/heroSection/Hero'
import Product from '../components/product/Product'
import TextHeading from '../components/TextHeading'
import { Box } from '@mui/material';

const Home = () => {
    return (
        <>
            {/* here hero section component {rf} */}
            <Hero />

            {/* here hompage main info {rf} */}
            <BoxContainer>
                {/* here best sallers section {rf} */}
                <Box sx={{
                    margin: '3rem 0',
                }}>
                    {/* here section heading text */}
                    <TextHeading highlightText="Best Sellers" normalText='Best selling of the month' textAlign='left' />
                    {/* here All best selles product */}
                    <Product />
                </Box>
            </BoxContainer>
        </>
    )
}

// here export the component
export default Home