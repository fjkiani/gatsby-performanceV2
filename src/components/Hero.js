import * as React from "react"
import Image from "gatsby-image"
import { Box, Heading,  Button } from 'theme-ui';

import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
// ...GatsbyImageSharpFluid
import { useState } from 'react';
import { useEffect } from 'react';
import moment from 'moment'
import anImportantCalculation from '../utils/calculation';



const query =  graphql `
 {
  fluid: file(relativePath: {eq: "you-x-ventures.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`


const Hero = () => {
  const [today, settoday] = useState('')

  useEffect(() => {
    anImportantCalculation()

    setTimeout(() => {
      settoday(moment().format('MMMM Do'))
    }, 1000)

    return () => {

    }
  }, [])

  const data = useStaticQuery(query);


  return (
    <Box sx={{
      position: 'relative'
    }}>
    <Image fluid={data.fluid.childImageSharp.fluid}></Image>

      <div style={{
        // backgroundImage: "url('/you-x-ventures-nF0nQuqBsrI-unsplash.jpg')",
        height: '50vh',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(56,66,89, .25)'

        }}></div>
        <Box sx={{
          zIndex: 1
        }}>
          <Heading as="h1" mb="3" color="black">Full websites in 1 hour or less!</Heading>
          <Button color="black" >View Appointments for {today} </Button>
        </Box>
      </div>
    </Box >
  );
}



export default Hero