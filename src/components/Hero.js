import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  useMediaQuery,
  useControllableState,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Hero() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");

  return (
    <Box
      color="white"
      py={isLargerThan1024 ? "132px" : "64px"}
      px={isLargerThan1024 ? "32px" : "0px"}
      w={"100%"}
      textAlign="center"
    >
      <Heading
        fontFamily="Roboto"
        fontWeight="700"
        fontSize={isLargerThan1024 ? "75px" : "46px"}
        mx={isLargerThan1024 ? "106px" : "24px"}
      >
        Deploy modern web experiences with the smartest web builder
      </Heading>
      <Text
        fontFamily="Inter"
        fontWeight="400"
        fontSize="20px"
        lineHeight="30px"
        color="#888888"
        pt="16px"
        px={isLargerThan1024 ? "300px" : "36px"}
      >
        Introducing Composer - the most advanced web and landing page builder
        for non-programmers that helps you to speed up your digital production
        processes
      </Text>
      <Button
        bgColor="#4F4FFF"
        borderRadius="99px"
        mt="32px"
        rightIcon={<ArrowForwardIcon />}
      >
        Request your free demo
      </Button>
    </Box>
  );
}
