import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Heading, Stack, Image,Text, Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductCart } from "../Redux/products/action";
import { Rating } from "./Product";

const Cart = () => {
  const cart = useSelector((state) => state.ecomData.cart);
   const dispatch= useDispatch();
  const removeProduct=(id)=>{
    dispatch(removeProductCart(id))
  }
  const checkOutHandler=()=>{

  }
 

  return (
    <Box textAlign={"center"}>
      <Heading as="h2">Cart Items</Heading>
      {cart.map((el) => (
        <CartItem key={el.id} {...el} removeProduct={removeProduct} checkOutHandler={checkOutHandler}/>
      ))}
    </Box>
  );
};

const CartItem = ({
  id,
  image,
  category,
  color,
  price,
  description,
  title,
  rating,
  removeProduct, checkOutHandler
}) => {
  return (
    <Box border={"1px solid red"} margin={"auto"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={"center"}
        p="10px"
      >
        <Box
          width={{ base: "80%", md: "48%", lg: "40%" }}
          height={"300px"}
          border="1px solid blue"
          position={"relative"}
          padding="0 1rem"
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "80%",
            h: "80%",
            pos: "absolute",
            top: "10%",
            left: "10%",
            transform: `translate(-50% -50%)`,
            backgroundImage: `url(${image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
        >
          <Image
          alignItems={"center"}
          margin="auto"
            rounded={"lg"}
            height={280}
            width={300}
            objectFit={"content"}
            src={
              image
            }
          />
        </Box>
        <Box
          width={{ base: "90%", md: "48%", lg: "40%" }}
          height={"auto"}
          border="1px solid green"
        >
           <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {category}
          </Text>
          <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Text fontWeight={800} fontSize={"xl"}>
              ${price}
            </Text>
          
          </Stack>
          <Box>{description}</Box>
          <Box>{Rating({rating:Number(rating?.rate)})}</Box>
        </Stack>
        <Button variant={"solid"} m={"10px"} leftIcon={<DeleteIcon/>} onClick={()=>removeProduct(id)}>Remove</Button>
        <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            // onClick={checkOutHandler}
          >
            CHECKOUT
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
