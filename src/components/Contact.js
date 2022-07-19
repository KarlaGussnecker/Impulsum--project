import React from "react";
import { Box, Button, Heading, HStack, useMediaQuery } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Contact() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <Box
      bg="#4F4FFF"
      ml="106px"
      w={isLargerThan1024 ? "80%" : "94%"}
      mb="112px"
    >
      <Heading
        textAlign={isLargerThan1024 ? "initial" : "center"}
        fontSize={isLargerThan1024 ? "64px" : "48px"}
        fontWeight="700px"
        color="white"
        p="64px"
      >
        Ready to deploy more and better products?
      </Heading>
      <HStack
        justify={isLargerThan1024 ? "initial" : "center"}
        ml={isLargerThan1024 ? "64px" : "0 auto"}
      >
        <Button
          color="#4F4FFF"
          bgColor="#FFFFFF"
          rightIcon={<ArrowForwardIcon />}
          mb="72px"
          borderRadius="99px"
        >
          Request your free demo
        </Button>
      </HStack>
    </Box>
  );
}
