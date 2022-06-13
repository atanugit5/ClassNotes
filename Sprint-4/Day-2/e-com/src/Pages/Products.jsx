import { Box, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import FilterComponent from "../Components/FilterComponent";
import { fetchData } from "../Redux/products/action";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useSelector((state) => state.ecomData.products);
  const loading = useSelector((state) => state.ecomData.loading);
  const error = useSelector((state) => state.ecomData.error);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (products?.length === 0) {
      let params = { category: searchParams.getAll("category") };
      dispatch(fetchData(params));
    }
  }, []);
  console.log(products);
  return (
    <Box>
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }} gap={"2rem"}>
        <Box minWidth={"15 rem"}>
          <FilterComponent />
        </Box>
        <Box>
          <Heading as="h2">Products</Heading>
          {loading && <Heading as="h4">Loading.....</Heading>}
          <Flex flexWrap="wrap" justifyContent="space-around">
            {products.map((el) => (
              <ProductItem key={el.id} {...el} />
            ))}
          </Flex>
          {error && <Heading as="h2">Error 404</Heading>}
        </Box>
      </Stack>
    </Box>
  );
};

export default Products;
