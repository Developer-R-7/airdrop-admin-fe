// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation({ data }) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card m="10">
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="4px"
      >
        Upcoming Airdrops
      </Text>
      <SimpleGrid columns="2" gap="30px">
        {data.map((item) => (
          <Information
            boxShadow={cardShadow}
            title={item.date}
            value={item.name}
          />
        ))}
      </SimpleGrid>
    </Card>
  );
}
