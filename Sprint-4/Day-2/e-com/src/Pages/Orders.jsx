import React, { useEffect } from "react";
import { Box, Heading, Flex, Image,Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrderData } from "../Redux/products/action";

const Orders = () => {
  const order = useSelector((state) => state.ecomData.order);
  console.log("order", order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderData());
  }, [dispatch]);
  return (
    <Box>
      <Heading as="h1" textAlign={"center"}>
        Your Orders
      </Heading>
      <Box>
        {order.map((el) => (
          <Flex m="20px">
            <Image src={el.image} w="200px" h="200px"/>
            <Box m="50px">
              <Text>{el.title}</Text>
              <Text>${el.price}</Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default Orders;
