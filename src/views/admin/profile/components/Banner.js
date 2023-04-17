// Chakra imports
import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";

export default function Banner({ company }) {
  const {
    display_name,
    logo,
    tasks_list,
    description,
    enrolled_users,
    social_handles,
    website,
  } = company;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align="center">
      <Box
        bg={`url(${logo})`}
        bgSize="cover"
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Avatar
        mx="auto"
        src={logo}
        h="87px"
        w="87px"
        mt="-43px"
        border="4px solid"
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {display_name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        <a href={website}>{website}</a>
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {enrolled_users.length}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Enrolled Users
          </Text>
        </Flex>
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            10
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Airdrops
          </Text>
        </Flex>
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {tasks_list.length}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            Tasks
          </Text>
        </Flex>
      </Flex>
      <Text color={textColorPrimary} fontSize="sm" mt="20px">
        {description}
      </Text>
      <Flex w="max-content" mx="auto" mt="20px">
        <a href={social_handles[0].link} style={{ marginInline: 20 }}>
          <AiFillTwitterCircle size={50} />
        </a>
        <a href={social_handles[1].link} style={{ marginInline: 20 }}>
          <BsDiscord size={50} />
        </a>
      </Flex>
    </Card>
  );
}
