"use client";

import { useEffect, useState } from "react";

import useFetchDetails from "@/src/app/_hooks/useFetchDetails";
import { useSession } from "@/src/app/_providers/session-provider";
import { Box } from "@chakra-ui/react";
import { BookingQuery } from "@prisma/client";

import UserBookingsCard from "../Cards/user-bookings-card";
import UserBookingsCardSkeleton from "../Skeleton/user-bookings-card-skeleton";

export default function UserBookings() {
  const { sessionUser, currentSession } = useSession();
  const [bookings, setBookings] = useState<BookingQuery[]>();
  const [deletedBookingId, setDeletedBookingId] = useState<string>();

  const { resData, isFetchingDetails } = useFetchDetails<BookingQuery[]>("/api/user/bookings", [
    { key: "uid", value: sessionUser?.$id as string },
    { key: "email", value: sessionUser?.email as string },
    { key: "sessionId", value: currentSession as string },
  ]);

  useEffect(() => {
    setBookings(resData);
  }, [resData]);

  useEffect(() => {
    const index = bookings?.findIndex((booking) => booking.id === deletedBookingId);
    if (index === -1) return;
    if (bookings) {
      bookings.splice(index as number, 1);
      setBookings([...bookings]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deletedBookingId]);

  if (isFetchingDetails) {
    return (
      <Box className="space-y-4">
        <UserBookingsCardSkeleton />
      </Box>
    );
  }

  return (
    <Box className="space-y-4">
      {bookings && bookings.length > 0 ? (
        bookings.map((item) => (
          <UserBookingsCard
            key={item.id}
            item={item}
            setDeletedBookingId={setDeletedBookingId}
          />
        ))
      ) : (
        <Box>No Booking Query to Display</Box>
      )}
    </Box>
  );
}
