import Logo from './assets/logo.svg'
/** @jsx jsx */
import { Box, Flex, jsx, Link, NavLink, Text } from 'theme-ui'
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [displayBanner, setDisplayBanner] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplayBanner(true)
    }, 1000)

  }, [])

  return (
    <>
      <Box py={3} px={3} sx={{
        backgroundColor: 'rgb(196, 237, 222)'
      }}>
        <Flex sx={{
          justifyContent: 'space-between'
        }}>

          <header >
            <div>
              <Link href="/">
                {/* <Logo height="90" /> */}
              </Link>
            </div>
          </header>

          <Flex sx={{
            alignItems: 'center'
          }}>
            <NavLink href="/blog">Blog</NavLink>
          </Flex>
        </Flex>
      </Box>
      {displayBanner && (
        <Box backgroundColor={"rgb(56, 66, 89)"} py={5} px={2}>
          <Text color="white">Get 50% off through the end of the year!</Text>
        </Box>
      )}
    </>
  )
};


export default Header;