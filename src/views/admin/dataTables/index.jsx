import { Box } from "@chakra-ui/react";
import ComplexTable from "views/admin/dataTables/components/ComplexTable";
import React, { useEffect, useState } from "react";
import { getEnrolledUsers } from "services/apiservices";

export default function Table() {
  const [tableData, setTableData] = useState([]);

  const getUsers = async () => {
    const response = await getEnrolledUsers("643dc3c523deb359585425c6");
    setTableData(response.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const data = [
    {
      name: "Jhon Wick",
      joined_at: 1681738795,
      wallet_address: "0x1234567890abcdef1234567890abcdef12345678",
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
      taskStatus: "1/3",
    },
  ];

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <ComplexTable tableData={tableData} />
    </Box>
  );
}
