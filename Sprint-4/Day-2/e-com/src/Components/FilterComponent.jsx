import {
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/products/action";
import { useDispatch } from "react-redux";

const FilterComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [CategoryValues, setCategoryValues] = useState(
    searchParams.getAll("category") || []
  );
  const categoryHandler = (values) => {
    setCategoryValues(values);
  };
  useEffect(() => {
    if (CategoryValues) {
      setSearchParams({ category: CategoryValues }, { replace: true });
      let params = { category: searchParams.getAll("category") };
      dispatch(fetchData(params));
    }
  }, [CategoryValues, setSearchParams, dispatch, searchParams]);

  return (
    <Box paddingLeft={"10px"}>
      <Box display={{ base: "none", md: "block" }}>
        <Text fontSize="2xl">FilterComponent</Text>
        <Text>Category</Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={CategoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="men's clothing">Men's clothing</Checkbox>
            <Checkbox value="women's clothing">Women's clothing</Checkbox>
            <Checkbox value="electronics">Electronics</Checkbox>
            <Checkbox value="jewelery">Jewelery</Checkbox>
            <Checkbox value="bags">Bags</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default FilterComponent;
