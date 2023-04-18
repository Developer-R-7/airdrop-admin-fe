// Chakra imports
import { SimpleGrid, Text, useColorModeValue, Button } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React, { useState } from "react";
import Information from "views/admin/profile/components/Information";
import Modal from "views/admin/profile/components/Modal.jsx";

// Assets
export default function GeneralInformation({ data }) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );

  const [show, setShow] = useState(false);
  const onCreateAirdrop = () => {
    setShow(true);
  };

  return (
    <>
      <Modal isOpen={show} onClose={() => setShow(false)} />
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
        <Button onClick={onCreateAirdrop} colorScheme="blue">
          Create Airdrop
        </Button>
      </Card>
    </>
  );
}
