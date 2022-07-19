import React from "react";
import logo from "../images/ComposerLogo.png";
import { Box, Image, Text, Flex, Spacer, Button, Hide } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box w="100%" h="124px">
      <Flex pt="32px" pl="106px" pr="">
        <Image src={logo} />

        <Hide below="md">
          <Text
            fontSize="28px"
            fontFamily="Roboto"
            lineHeight="33px"
            letterSpacing="0.02em"
            color="white"
            fontWeight="900"
            pl="16px"
            mt="10px"
            pt="18x"
          >
            Composer{" "}
          </Text>
        </Hide>
        <Spacer />
        <Button
          bgColor="#4F4FFF"
          mr="108px"
          mt="10px"
          borderRadius="99px"
          rightIcon={<ArrowForwardIcon />}
        >
          Request your free demo
        </Button>
      </Flex>
    </Box>
  );
}
