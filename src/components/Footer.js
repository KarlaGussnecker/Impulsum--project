import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Spacer,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../images/ComposerLogo.png";

export default function Footer() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <Box w="100%">
      <Flex>
        <Text
          color="#888888"
          fontSize="16px"
          pl={isLargerThan1024 ? "106px" : "20px"}
          pb="52px"
          pt={isLargerThan1024 ? "164px" : "60px"}
        >
          © {new Date().getFullYear()} Composer. Proudly powered by{" "}
          <Text as="span" color="#4F4FFF">
            Impulsum Venture Colab
          </Text>
          . All Rights Reserved.
          <Text as="span" color="#4F4FFF">
            Privacy Policy
          </Text>
        </Text>
        <Spacer></Spacer>
        <Image
          src={logo}
          w="60px"
          h="60px"
          mr={isLargerThan1024 ? "106px" : "20px"}
          mt={isLargerThan1024 ? "155px" : "70px"}
        />
      </Flex>
    </Box>
  );
}
