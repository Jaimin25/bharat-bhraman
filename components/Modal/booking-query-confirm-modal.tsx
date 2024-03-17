import NextLink from "next/link";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

export default function BookingQueryConfirmModal({
  isOpen,
  onClose,
  uuid,
}: {
  isOpen: boolean;
  onClose: () => void;
  uuid: string;
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="md"
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Thank You!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            Thank you for choosing BharatBhraman for your Holiday Requirement. Your Query Number is{" "}
            <span className="font-semibold">{uuid}</span>, One of our travel consultant will revert back to you with the
            best available options with cheapest prices.
          </Text>
        </ModalBody>

        <ModalFooter>
          <NextLink href="/user/dashboard">
            <Button colorScheme="green">Go to dashboard</Button>
          </NextLink>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
