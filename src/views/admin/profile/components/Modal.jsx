import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

const ModalComp = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Airdrop</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Basic usage" mt={5} />
            <Input placeholder="Basic usage" mt={5} />
            <Input placeholder="Basic usage" mt={5} />
            <Input placeholder="Basic usage" mt={5} />
            <Input placeholder="Basic usage" mt={5} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Create</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalComp;
