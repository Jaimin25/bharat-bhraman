"use client";

import UserAccountDetails from "@/components/Dashboard/user-account-details";
import UserBookings from "@/components/Dashboard/user-bookins";
import { Box, Card } from "@chakra-ui/react";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
export default function Dashboard() {
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
