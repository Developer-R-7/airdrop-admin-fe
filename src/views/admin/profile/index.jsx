import { Box, Flex } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Projects from "views/admin/profile/components/Projects";
import Modal from "views/admin/profile/components/Modal";
import React, { useEffect, useState } from "react";

export default function Overview() {
  const company = {
    display_name: "Blockchain Club SRM",
    logo: "https://res.cloudinary.com/dnfy7apiy/image/upload/v1679714457/Polygon_cnolp8.png",
    tasks_list: ["ObjectId"],
    description:
      "Layer 0 is a hackfest event organized by Blockchain Club SRM x GenY, aiming to connect keen enthusiasts and upcoming developers to leading industry professionals in the blockchain and web3 ecosystem. It is a 3 day event from April 17th to April 19th consisting of various technical events and fun activities including a Mystery Room, NFT Hunt and hackathon.",
    enrolled_users: ["1", "2 ", "3"],
    social_handles: [
      {
        name: "Twitter",
        link: "https://twitter.com",
      },
      {
        name: "Discord",
        link: "https://discord.com",
      },
    ],
    website: "https://www.blockchainsrm.org/",
  };

  const upcomingAirDrops = [
    {
      name: "CyberFi",
      date: "April 20th, 2023",
    },
    {
      name: "Gnosis",
      date: "April 23th, 2023",
    },
    {
      name: "HackFest",
      date: "April 24th, 2023",
    },
  ];

  const allAirdrops = [
    {
      name: "Crypto Airdrop",
      date: "April 17th, 2021",
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Modal />
      <Flex>
        <Banner gridArea="1 / 1 / 2 / 2" company={company} />

        <General
          data={upcomingAirDrops}
          gridArea={{
            base: "3 / 1 / 4 / 2",
            lg: "1 / 3 / 2 / 4",
          }}
        />
      </Flex>

      <Projects gridArea="1 / 2 / 2 / 2" data={allAirdrops} />
    </Box>
  );
}
