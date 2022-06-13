import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
    <Flex>
        <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
   Profile
  </MenuButton>
  <MenuList>
    <MenuItem>Sign-In</MenuItem>
    <MenuItem>Sign-up</MenuItem>
    <MenuItem>Cart</MenuItem>
  </MenuList>
</Menu>
    </Flex>
  )
}

export default Profile