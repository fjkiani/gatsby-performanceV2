import * as React from "react"
// import { Helmet } from "react-helmet"
import { Box, Button, Container, Grid, Heading, Text } from 'theme-ui'
import Image from "gatsby-image"

// import Footer from "../components/footer"
// import Header from '../components/header/Header';
import Hero from "../components/Hero"
// import Footer from "../components/Footer"


import { graphql, useStaticQuery } from "gatsby"

export const query =  graphql`
 {
	allContentfulGatsbyCloudinary {
		nodes {
      name	
      id	
      image {
				fluid {
					...GatsbyContentfulFluid
        }
      }
    }
  }
}
`





// markup
const IndexPage = ({data}) => {
  
  console.log(data)

  // const data = useStaticQuery(getImages)

  const {
    allContentfulGatsbyCloudinary: { nodes: pictures },
  } = data
  // console.log(pictures)

  return (
    <main>
     <Hero/>
      <title>Home Page</title>
  

      <Container p={4}>
        <Heading mb="2" mt="5" p="4">
          About Us
      </Heading>

      {pictures.map(picture => {

        // const fluid0 = picture.image.fluid[0]
        // console.log(fluid0)

        // const fluid = picture.image.localFiles[0].childImageSharp.fluid


        console.log(pictures)
       return <article key ={picture.id}>
       
       <Grid gap={2}
          columns={[2, '1fr 1fr']}>
          
          <Box p="4">
          <Image fluid={picture.image.fluid}></Image>
          </Box>

          <Box p="4">
            <Text mb={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing
          </Text>
            <Button>Learn More</Button>
          </Box>
        </Grid>


       </article>
      })}


 
      
      </Container>
      {/* <Footer/> */}
    </main>
  )
}

export default IndexPage
