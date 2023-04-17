import {
  Flex,
  Table,
  Tbody,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import React from "react";
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import styles from "./styles.module.css";
export default function ColumnsTable({ tableData }) {
  return (
    <Card direction="column" w="100%" h="100%" px="0px">
      {tableData.length > 0 ? (
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Joined At</Th>
                <Th>Wallet Address</Th>
                <Th>Subscription Tier</Th>
                <Th>Email</Th>
                <Th>Twitter</Th>
                <Th>Discord</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, idx) => (
                <Tr style={{ margin: 5 }}>
                  <Td>{row.name}</Td>
                  <Td>{row.joined_at}</Td>
                  <Td>{row.wallet_address}</Td>
                  <Td>{row.subscription_tier}</Td>
                  <Td>{row.email}</Td>
                  <Td className={styles.social}>{row.social_links[0].link}</Td>
                  <Td className={styles.social}>{row.social_links[1].link}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Center>
          <h1>No Data</h1>
        </Center>
      )}
    </Card>
  );
}
