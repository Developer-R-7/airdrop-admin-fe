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
import _ from "lodash";
import { acceptUsers, rejectUsers } from "services/apiservices";
export default function ColumnsTable({ tableData }) {
  return (
    <Card direction="column" w="100%" h="100%" px="0px">
      {tableData.length > 0 ? (
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Username</Th>
                <Th>Joined At</Th>
                <Th>Task Status</Th>
                <Th>Wallet Address</Th>
                <Th>Whitelist</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tableData.map((row, idx) => {
                console.log(row);
                return (
                  <Tr style={{ margin: 5 }}>
                    <Td>{row.name}</Td>
                    <Td>{row.username}</Td>
                    <Td>{row.joined_at}</Td>
                    <Td>1/3</Td>
                    <Td>
                      {_.truncate(row.wallet_address, {
                        length: 10,
                        omission: "...",
                      })}
                    </Td>

                    <Td style={{ display: "flex" }}>
                      {row.airdrops[0].status == "" ? (
                        <>
                          <button
                            className={styles.rejectBtn}
                            onClick={() =>
                              rejectUsers({
                                user_id: row._id,
                                airdrop_id: "xq34027",
                              })
                            }
                          >
                            Reject
                          </button>
                          <button
                            className={styles.acceptBtn}
                            onClick={() =>
                              acceptUsers({
                                user_id: row._id,
                                airdrop_id: "xq34027",
                              })
                            }
                          >
                            Accept
                          </button>
                        </>
                      ) : row.airdrops[0]?.status ? (
                        _.capitalize(row.airdrops[0]?.status)
                      ) : (
                        "ACCEPTED"
                      )}
                    </Td>
                  </Tr>
                );
              })}
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
