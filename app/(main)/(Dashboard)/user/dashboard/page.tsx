"use client";

import { useSession } from "@/app/_providers/session-provider";
import UserAccountDetails from "@/components/Dashboard/user-account-details";
import UserBookings from "@/components/Dashboard/user-bookins";
import UserBookingsCardSkeleton from "@/components/Skeleton/user-bookings-card-skeleton";
import UserDashboardSkeleton from "@/components/Skeleton/user-dashboard-skeleton";
import { Box, Card } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Dashboard() {
  const { isFetching } = useSession();

  if (isFetching) {
    return (
      <Box className="w-full sm:w-2/3 lg:w-[35%]">
        <Card>
          <Tabs colorScheme="green">
            <TabList>
              <Tab className="flex-1">Account Details</Tab>
              <Tab className="flex-1">Bookings</Tab>
            </TabList>
            <TabPanels>
              <TabPanel padding="0px">
                <UserDashboardSkeleton />
              </TabPanel>
              <TabPanel>
                <UserBookingsCardSkeleton />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Card>
      </Box>
    );
  }

  return (
    <Box className="w-full sm:w-2/3 lg:w-[35%]">
      <Card>
        <Tabs colorScheme="green">
          <TabList>
            <Tab className="flex-1">Account Details</Tab>
            <Tab className="flex-1">Bookings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel padding="0px">
              <UserAccountDetails />
            </TabPanel>
            <TabPanel>
              <UserBookings />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Box>
  );
}
