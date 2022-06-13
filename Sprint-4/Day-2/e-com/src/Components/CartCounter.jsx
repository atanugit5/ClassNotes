import { Box } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartData } from "../Redux/products/action";

const CartCounter = () => {
  const cart = useSelector((state) => state.ecomData.cart);
  const dispatch = useDispatch();
  console.log("c", cart);
  useEffect(() => {
    if (cart?.length === 0) {
      dispatch(fetchCartData());
    }
  }, [cart?.length, dispatch]);
  return <Box>{cart?.length ? cart.length : 0}</Box>;
};

export default CartCounter;
