import React from "react";
import highimage1 from "../images/Business.svg";
import {
  Flex,
  HStack,
  Box,
  Image,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import highimage2 from "../images/Marketing.svg";

export default function Highlights() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (
    <Flex direction={"column"}>
      <Flex
        direction={isLargerThan1024 ? "row" : "column-reverse"}
        mt={isLargerThan1024 ? "112px" : "0px"}
        ml={isLargerThan1024 ? "106px" : "0px"}
        mr={isLargerThan1024 ? "106px" : "0px"}
        mb={isLargerThan1024 ? "192px" : "0px"}
      >
        <HStack justify="center" mb={isLargerThan1024 ? "132px" : "32px"}>
          <Image
            src={highimage1}
            ml={isLargerThan1024 ? "105px" : "0px"}
            mt={isLargerThan1024 ? "117px" : "0px"}
            pr="36px"
          />
        </HStack>
        <HStack
          textAlign={isLargerThan1024 ? "initial" : "center"}
          justify="center"
        >
          <Box>
            <Text
              fontFamily="Roboto"
              fontWeight="100"
              fontSize="20px"
              lineHeight="24px"
              color="#4F4FFF"
              pl={isLargerThan1024 ? "36px" : "24px"}
            >
              For Startups & Business Owners
            </Text>
            <Heading
              fontSize="44px"
              lineHeight="52px"
              color="white"
              pl={isLargerThan1024 ? "36px" : "24px"}
              pr={isLargerThan1024 ? "122px" : "24px"}
            >
              We support the way you run your Business
            </Heading>
            <Text
              pt="16px"
              pl={isLargerThan1024 ? "36px" : "24px"}
              pr={isLargerThan1024 ? "122px" : "24px"}
              color="#888888"
              h="100px"
            >
              With our drag-and-drop web editor and customizable professional
              templates that fit your brand, you'll be online in no time.
            </Text>
          </Box>
        </HStack>
      </Flex>
      <Flex direction={isLargerThan1024 ? "row" : "column"}>
        <HStack
          textAlign={isLargerThan1024 ? "initial" : "center"}
          width={isLargerThan1024 ? "50%" : "100%"}
          pb={isLargerThan1024 ? "192px" : "24px"}
        >
          <Box>
            <Text
              fontFamily="Roboto"
              fontWeight="100"
              fontSize="20px"
              lineHeight="24px"
              color="#4F4FFF"
              pl={isLargerThan1024 ? "106px" : "24px"}
            >
              For Marketing Experts
            </Text>
            <Heading
              fontSize="44px"
              lineHeight="52px"
              color="white"
              pl={isLargerThan1024 ? "106px" : "24px"}
              pb={isLargerThan1024 ? "16px" : "24px"}
              pr={isLargerThan1024 ? "1px" : "24px"}
            >
              Get better conversion rates
            </Heading>
            <Text
              pl={isLargerThan1024 ? "106px" : "24px"}
              pr="36px"
              color="#888888"
            >
              We help you create high-converting landing pages, engaging popups,
              integrated SEO, and social media integrations to reach a wider
              audience and optimize conversion rates using precise and
              customized A/B testing, and analytical insights.
            </Text>
          </Box>
        </HStack>
        <HStack justify={"center"} width={isLargerThan1024 ? "50%" : "100%"}>
          <Image
            src={highimage2}
            pr={isLargerThan1024 ? "106px" : "0px"}
          ></Image>
        </HStack>
      </Flex>
    </Flex>
  );
}
