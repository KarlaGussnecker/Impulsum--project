import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import featuresImage1 from "../images/DesignSystemTool.svg";
import featuresImage2 from "../images/ComponentCatalog.svg";

export default function Features() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <Box pb="244px">
      <Box>
        <Heading
          fontSize="44px"
          textAlign="center"
          mb="16px"
          color="white"
          pt="132px"
        >
          We have got what you need
        </Heading>
        <Text fontSize="20px" textAlign="center" color="#4F4FFF">
          Learn more about the amazing features our team is developing.
        </Text>
      </Box>
      <Flex direction={isLargerThan1024 ? "row" : "column"}>
        <Flex
          p={isLargerThan1024 ? "0px" : "16px"}
          width={isLargerThan1024 ? "50%" : "100%"}
        >
          <VStack
            textAlign={isLargerThan1024 ? "left" : "center"}
            pt="88px"
            pl={isLargerThan1024 ? "66px" : "0px"}
          >
            <Image src={featuresImage1} w={"100%"} />
            <Heading
              paddingLeft={isLargerThan1024 ? "24px" : "0px"}
              color="white"
            >
              Apply your Brand Identity into our{" "}
              <Text as="span" color="#4F4FFF">
                Design System Tool
              </Text>
            </Heading>
            <Text
              paddingLeft={isLargerThan1024 ? "24px" : "0px"}
              color="#888888"
            >
              We have created the most flexible Design System tool to enable you
              to easily deploy your brand color scheme, fonts, images, and style
              into it to create your personalized Theme, or if you need it
              multi-brand themes!
            </Text>
          </VStack>
        </Flex>
        <Flex
          p={isLargerThan1024 ? "0px" : "16px"}
          width={isLargerThan1024 ? "50%" : "100%"}
        >
          <VStack
            textAlign={isLargerThan1024 ? "left" : "center"}
            pt="88px"
            pr={isLargerThan1024 ? "66px" : "0px"}
          >
            <Image src={featuresImage2} w={"100%"} />
            <Heading
              paddingLeft={isLargerThan1024 ? "24px" : "0px"}
              color="white"
            >
              Get your perfect branded and coded{" "}
              <Text as="span" color="#4F4FFF">
                Component Catalog
              </Text>
            </Heading>
            <Text
              paddingLeft={isLargerThan1024 ? "24px" : "0px"}
              color="#888888"
            >
              Once your brand theming is applied you can rapidly launch modern
              experiences with a space grade React component catalog based on
              the ubiquitous open-source Chakra UI library.
            </Text>
          </VStack>
        </Flex>
      </Flex>
    </Box>
  );
}
