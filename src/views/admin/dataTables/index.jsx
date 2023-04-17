import { Box } from "@chakra-ui/react";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import React from "react";

export default function Table() {
  const data = [
    {
      name: "Jhon Wick",
      joined_at: 1681738795,
      wallet_address: "0x1234567890abcdef1234567890abcdef12345678",
      subscription_tier: 0,
      enrolled_company: ["CO1"],
      email: "jhonwick@gmail.com",
      social_links: [
        {
          label: "twitter",
          link: "https://twitter.com/jhonwick",
        },
        {
          label: "discord",
          link: "https://discord.com/jhonwick",
        },
      ],
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <ComplexTable tableData={data} />
    </Box>
  );
}
