"use client";

import { Dispatch, SetStateAction, useState } from "react";
import axios from "axios";

import { useSession } from "@/src/app/_providers/session-provider";
import { useToast } from "@/src/app/_providers/toast-provider";
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

export default function BookingQueryCancelModal({
  isOpen,
  onClose,
  setDeletedBookingId,
  uuid,
}: {
  isOpen: boolean;
  onClose: () => void;
  setDeletedBookingId: Dispatch<SetStateAction<string | undefined>>;
  uuid: string;
}) {
  const { currentSession, sessionUser } = useSession();
  const { toastSuccess, toastError } = useToast();
  const [isDeleting, setIsDeleting] = useState<boolean>();

  const handleDeleteBooking = async () => {
    setIsDeleting(true);
    try {
      const res = await axios.delete("/api/user/bookings", {
        data: {
          uid: sessionUser?.$id,
          email: sessionUser?.email,
          sessionId: currentSession,
          bookingId: uuid,
        },
      });

      const resData = res.data;
      setIsDeleting(false);
      if (resData.statusCode === 200) {
        setDeletedBookingId(uuid);
        onClose();
        toastSuccess("Query Cancelled", "Successfully Cancelled Query");
      } else {
        toastError("Error", resData.message);
      }
    } catch (error) {
      toastError("Error", (error as Error).message);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size="md"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Confirm Cancellation</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to cancel your booking query?</Text>
        </ModalBody>

        <ModalFooter gap="10px">
          <Button>Cancel</Button>
          <Button
            colorScheme="green"
            isLoading={isDeleting}
            onClick={handleDeleteBooking}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
